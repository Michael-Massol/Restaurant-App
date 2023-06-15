import { RestaurantsList } from "./RestaurantList";
import { useContext } from "react";
import { RestaurantContext } from "../../context/RestaurantContext";

const Home = () =>{
    const {restaurants}= useContext(RestaurantContext)
    return <RestaurantsList restaurants={restaurants}/>
}

export default Home;