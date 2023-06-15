import { createContext, useContext } from "react"
import { restaurants } from "../data/data";
import { RestaurantType } from "../models/RestaurantType";


export const RestaurantContext = createContext<{ restaurants: RestaurantType[]}>({ restaurants: []});

export const RestaurantContextProvider = ({ children }:any) => {
    return (
        <RestaurantContext.Provider value={{restaurants}}>
        {children}
        </RestaurantContext.Provider>
    )
}