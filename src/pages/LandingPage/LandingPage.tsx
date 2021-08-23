import React, { useState } from "react";
import { ChameleonLogo } from "../../components/ChameleonLogo/ChameleonLogo";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import "./LandingPage.scss";
import { useHistory } from "react-router-dom";

export const LandingPage = () => {
	const history = useHistory();
	const [collection, setCollection] = useState<string>("Collections");
	const [query, setQuery] = useState("");

	return (
		<div className="landing">
			<div className="container">
				<ChameleonLogo />
				<h1>
					<span>image</span> search
				</h1>
				<div className="form">
					<input
						className="form-text"
						placeholder="Query"
						onChange={(e) => setQuery(e.target.value)}
					/>
					<div className="dropdown-margin">
						<Dropdown collection={collection} setCollection={setCollection} />
					</div>
					<button
						className="btn btn-primary btn-margin"
						onClick={() =>
							history.push(
								`/images/${query}/${
									collection == "Collections" ? "All" : collection
								}`
							)
						}
					>
						Search
					</button>
				</div>
			</div>
		</div>
	);
};
