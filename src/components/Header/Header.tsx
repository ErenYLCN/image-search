import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ChameleonLogo } from "../ChameleonLogo/ChameleonLogo";
import { Dropdown } from "../Dropdown/Dropdown";
import "./Header.scss";

export const Header = () => {
	const history = useHistory();
	const [query, setQuery] = useState("");
	const [collection, setCollection] = useState<string>("Collections");

	return (
		<div className="header">
			<div className="header-content">
				<ChameleonLogo />
				<div className="form-fields">
					<input
						className="form-text"
						placeholder="Query"
						onChange={(e) => setQuery(e.target.value)}
					/>
					<Dropdown collection={collection} setCollection={setCollection} />
				</div>
				<button
					className="btn btn-primary"
					onClick={() => history.push(`/images/${query}/${collection}`)}
				>
					Search
				</button>
			</div>
		</div>
	);
};
