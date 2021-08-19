import React, { useState } from "react";
import { ChameleonLogo } from "../../components/ChameleonLogo/ChameleonLogo";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import "./LandingPage.scss";

export const LandingPage = () => {
	const [collection, setCollection] = useState<string>("Collections");

	return (
		<div className="landing">
			<div className="container">
				<ChameleonLogo />
				<h1>
					<span>image</span> search
				</h1>
				<div className="form">
					<input className="form-text" placeholder="Query" />
					<Dropdown collection={collection} setCollection={setCollection} />
					<button className="btn btn-primary">Search</button>
				</div>
			</div>
		</div>
	);
};
