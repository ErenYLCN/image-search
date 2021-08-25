import React from "react";
import { Header } from "../../components/Header/Header";
import "./ErrorPage.scss";

export const ErrorPage = () => {
	return (
		<div>
			<Header />
			<div className="error-content">
				<div className="error">
					<span className="error-msg">
						Could not find what you are looking for {":("}
					</span>
				</div>
			</div>
		</div>
	);
};
