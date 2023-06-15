import { useContext } from "react";
import "./Modal.css";
import { FavoritesContext } from "../../context/FavoritesContext";

export const Modal = (props: { showModal: boolean }) => {
  const { setShowModal, removeFavorite } = useContext(FavoritesContext);
  console.log(props);
  if (!props.showModal) return null;
  return (
    <div className="modal-container">
      <h4>Please confirm or cancel your request to remove this restaurant from your favorites.</h4>
      <div className="modal-buttons-container">
      <button
        onClick={() => {
          removeFavorite();
          setShowModal(false);
        }}
      >
        Confirm
      </button>
      <button onClick={() => setShowModal(false)}>Cancel</button>
      </div>
    </div>
  );
};