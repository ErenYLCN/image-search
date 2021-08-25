import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ChameleonLogo } from "../ChameleonLogo/ChameleonLogo";
import { Dropdown } from "../Dropdown/Dropdown";
import searchIcon from "../../assets/search-icon.svg";
import "./Header.scss";

export const Header = () => {
	const history = useHistory();
	const [query, setQuery] = useState("");
	const [collection, setCollection] = useState<string>("Collections");

	return (
		<div className="header">
			<div className="header-content">
				<div className="header-logo">
					<ChameleonLogo />
				</div>
				<div className="form-fields">
					<input
						className="form-text"
						placeholder="Query"
						onChange={(e) => setQuery(e.target.value)}
					/>
					<Dropdown collection={collection} setCollection={setCollection} />
				</div>
				<button
					className="btn btn-primary btn-shrink"
					onClick={() =>
						history.push(
							`/images/${query}/${
								collection == "Collections" ? "Featured" : collection
							}/1`
						)
					}
				>
					<img src={searchIcon} alt="search icon" className="search-icon" />
					<span className="search-text">Search</span>
				</button>
			</div>
		</div>
	);
};
