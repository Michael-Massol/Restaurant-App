import React from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import { useContext, useEffect, useState } from "react";
import { RestaurantContext } from "../../context/RestaurantContext";
import { RestaurantsList } from "./RestaurantList";
import { RestaurantType } from "../../models/RestaurantType";

const FavoritesPage = () => {
  const { favoritesIds } = useContext(FavoritesContext);
  const { restaurants } = useContext(RestaurantContext);
  const [favoriteRestaurant, setFavoriteRestaurant] = useState<
    RestaurantType[]
  >([]);

  useEffect(() => {
    const filteredIds = restaurants.filter((item) =>
      favoritesIds.includes(item.id)
    );
    setFavoriteRestaurant(filteredIds);
  }, [favoritesIds]);

  return (
    <div>
      <h2 style={{textAlign:"center"}}>Favorites</h2>
      {favoritesIds.length === 0 ? (
        <h2>You have no favorites added yet.</h2>
      ) : (
        <RestaurantsList restaurants={favoriteRestaurant} />
      )}
    </div>
  );
};

export default FavoritesPage;
