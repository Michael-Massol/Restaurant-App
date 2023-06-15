import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
	return (
		<>
		<header>
				<Link to="/"><h1>Restaurant App</h1></Link>
				<Link to="/favorites"><button id="go-to-fav">Go to favorites</button></Link>
		</header>
		<Outlet />
		</>
	);
};

export default Header;
