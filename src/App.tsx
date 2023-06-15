import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Pages/Home";
import Header from "./component/Pages/Header";
import NoPage from "./component/Pages/NoPage";
import DetailsPage from "./component/Pages/DetailsPage";
import { RestaurantContext, RestaurantContextProvider } from "./context/RestaurantContext";
import { restaurants } from "./data/data";
import { FavoritesContextProvider } from "./context/FavoritesContext";
import FavoritesPage from "./component/Pages/FavoritesPage";

const App = () => {
  return (
      <RestaurantContextProvider>
        <FavoritesContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
              <Route path="details/:restaurantId" element={<DetailsPage />} />
              <Route path="favorites" element={<FavoritesPage />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
        </FavoritesContextProvider>
      </RestaurantContextProvider>
  );
};

export default App;
