import React from "react";
import { RestaurantType } from "../../models/RestaurantType";
import "./RestaurantCard.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";

type RestaurantsProps = {
  restaurant: RestaurantType;
};

export const RestaurantCard = ({ restaurant }: RestaurantsProps) => {
  const {
    favoritesIds,
    addFavorite,
    setShowModal,
    setSelectedFavId,
  } = useContext(FavoritesContext);
  const isFavorite = favoritesIds.includes(restaurant.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      setSelectedFavId(restaurant.id);
      setShowModal(true);
    } else {
      addFavorite(restaurant.id);
    }
  };

  return (
    <article className="restaurant-content">
      <Link to={`/details/${restaurant.id}`}>
        <img src={restaurant.img} alt="Restaurant image" />
        <h3>{restaurant.name}</h3>
        <p>{restaurant.description_short}</p>
      </Link>
      <div id="btn-and-img-container">
        {isFavorite ? (
          <>
            <button id="add-to-favorites" onClick={handleFavoriteClick}>
              <img
                src="https://th.bing.com/th/id/OIP.nFYedaF4gF42qbAMkI58ygAAAA?w=177&h=180&c=7&r=0&o=5&pid=1.7"
                alt="filled star"
              />
            </button>
            <p>&larr; Remove from favorites</p>
          </>
        ) : (
          <>
            <button id="add-to-favorites" onClick={handleFavoriteClick}>
              <img
                src="https://th.bing.com/th/id/R.8af3615f3ebf3c9a1acf889e871ae3cd?rik=shJ5Bj0F1gHFkw&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-gold-starstargeometricallydecagonconcavestardomyellow-stargold-1421526501481iqr2n.png&ehk=PGFPgGIFf1RJX4xq5rc1mv%2b0T3tX1Cwgv3gELQqUFHY%3d&risl=&pid=ImgRaw&r=0"
                alt="filled star"
              />
            </button>
            <p>&larr; Add to favorites</p>
          </>
        )}
      </div>
    </article>
  );
};
