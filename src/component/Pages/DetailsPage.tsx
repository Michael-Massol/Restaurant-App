import "./DetailsPage.css";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { RestaurantType } from "../../models/RestaurantType";
import { RestaurantContext } from "../../context/RestaurantContext";
import { FavoritesContext } from "../../context/FavoritesContext";

const DetailsPage = () => {
  const { restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState<RestaurantType | null>(null);
  const { restaurants } = useContext(RestaurantContext);
  
  // Si tu n'as pas besoin de removeFavorite ne l'importe pas
  const {
    favoritesIds,
    removeFavorite,
    setShowModal,
    addFavorite,
    setSelectedFavId,
  } = useContext(FavoritesContext);

  if (restaurantId == null) return <h1>Restaurant not found</h1>;

  const getRestaurant = () => {
    const foundRestaurant: RestaurantType | undefined = restaurants.find(
      (restaurant: RestaurantType) => {
        if (restaurantId) {
          if (restaurant.id === parseInt(restaurantId, 10)) {
            return true;
          }
        }
        return false;
      }
    );
    if (foundRestaurant) {
      setRestaurant(foundRestaurant);
    }
  };

  // Le useEffect ne peut pas être appelé après une condition, 
  // ça fait planter ton app. As-tu testé ?
  useEffect(() => {
    getRestaurant();
  }, []);

  if (!restaurant) {
    return <p>Loading...</p>;
  }

  const isFavorite = favoritesIds.includes(restaurant.id);

  const handleAddToFavorites = () => {
    if (isFavorite) {
      setSelectedFavId(restaurant.id);
      setShowModal(true);
    } else {
      addFavorite(restaurant.id);
    }
  };

  return (
    <>
      <section id="details-style">
        <h2>{restaurant.name}</h2>
        <article>
          <img src={restaurant.img} />
          <ul>
            <li>
              <h3>Entrees :</h3>
              <p>{restaurant.menu.entrees[0]}</p>
              <p>{restaurant.menu.entrees[1]}</p>
            </li>
            <li>
              <h3>Dishes :</h3>
              <p>{restaurant.menu.dishes[0]}</p>
              <p>{restaurant.menu.dishes[1]}</p>
              <p>{restaurant.menu.dishes[2]}</p>
            </li>
            <li>
              <h3>Deserts :</h3>
              <p>{restaurant.menu.deserts[0]}</p>
              <p>{restaurant.menu.deserts[1]}</p>
            </li>
          </ul>
        </article>
        <h3>{restaurant.address}</h3>
      </section>
      <div id="btn-and-img-container">
        {isFavorite ? (
          <>
            <button id="add-to-favorites" onClick={handleAddToFavorites}>
              <img
                className="star-image"
                src="https://th.bing.com/th/id/OIP.nFYedaF4gF42qbAMkI58ygAAAA?w=177&h=180&c=7&r=0&o=5&pid=1.7"
                alt="filled star"
              />
            </button>
            <p>&larr; Remove from favorites</p>
          </>
        ) : (
          <>
            <button id="add-to-favorites" onClick={handleAddToFavorites}>
              <img
                className="star-image"
                src="https://th.bing.com/th/id/R.8af3615f3ebf3c9a1acf889e871ae3cd?rik=shJ5Bj0F1gHFkw&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-gold-starstargeometricallydecagonconcavestardomyellow-stargold-1421526501481iqr2n.png&ehk=PGFPgGIFf1RJX4xq5rc1mv%2b0T3tX1Cwgv3gELQqUFHY%3d&risl=&pid=ImgRaw&r=0"
                alt="filled star"
              />
            </button>
            <p>&larr; Add to favorites</p>
          </>
        )}
      </div>
    </>
  );
};

export default DetailsPage;
