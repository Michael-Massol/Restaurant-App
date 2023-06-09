import { createContext, useState, useEffect } from "react";
import { Modal } from "../component/Pages/Modal";

type FavoritesContextType = {
  favoritesIds: number[];
  addFavorite: (id: number) => void;
  removeFavorite: () => void;
  // Je ne crois pas que tu aies besoin de rendre showModal disponible
  // comme tu le passes en prop à la modale ici
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  setSelectedFavId: (favId: number) => void;
};

type ContextProps = {
  children: React.ReactNode;
};
export const FavoritesContext = createContext<FavoritesContextType>(
  {} as FavoritesContextType
);
// export const useFavoritesContext = () => useContext(FavoritesContext);

export const FavoritesContextProvider = ({ children }: ContextProps) => {
  const [favoritesIds, setFavoritesIds] = useState<number[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  // variable d'état avec l'id du restau sélectionné
  const [selectedFavId, setSelectedFavId] = useState<number | null>(null);
  // Récupérer les favoris depuis le localStorage
  useEffect(() => {
    const currentFavorites = localStorage.getItem("favorites");

    if (currentFavorites) {
      const parsedFavorites = JSON.parse(currentFavorites);
      setFavoritesIds(parsedFavorites);
    }
  }, []);

  // Méthode pour ajouter un favori
  const addFavorite = (id: number) => {
    setFavoritesIds((prevFavorites) => {
      const updatedFavorites = [...prevFavorites, id];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };
  // Méthode pour supprimer un favori
  const removeFavorite = () => {
    setFavoritesIds((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter(
        (favoriteId) => favoriteId !== selectedFavId
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  return (
    <FavoritesContext.Provider
      value={{
        addFavorite,
        removeFavorite,
        favoritesIds,
        showModal,
        setShowModal,
        setSelectedFavId,
      }}
    >
      {children}
      <Modal showModal={showModal} />
    </FavoritesContext.Provider>
  );
};