import React from "react";
import { Header } from "../../components/Header/Header";
import "./ErrorPage.scss";

interface Props {
	msg: any;
}

export const ErrorPage = ({ msg }: Props) => {
	return (
		<>
			<Header />
			<div className="error-content">
				<div className="error">
					{msg} {":("}
				</div>
			</div>
		</>
	);
};
