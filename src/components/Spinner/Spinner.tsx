import React from "react";
import spinner from "../../assets/spinner.png";
import "./Spinner.scss";

export const Spinner = () => {
	return (
		<div>
			<img src={spinner} alt="spinner" className="spinner" />
		</div>
	);
};
