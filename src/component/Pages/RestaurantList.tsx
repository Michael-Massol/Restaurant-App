import React from "react";
import { RestaurantType } from "../../models/RestaurantType";
import { RestaurantCard } from "./RestaurantCard";
import './RestaurantList.css';

type RestaurantListProps = {
	restaurants: RestaurantType[];
}

export const RestaurantsList = ({ restaurants }: RestaurantListProps) => {
	return (
			<section className="restaurant-container">
				{restaurants.map((item) => (
					<RestaurantCard restaurant={item}
                    key={item.id} />
				))}
			</section>
	);
};
