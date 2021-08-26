import React from "react";
import { Header } from "../../components/Header/Header";
import "./ErrorPage.scss";

interface Props {
	msg: any;
}

export const ErrorPage = ({ msg }: Props) => {
	return (
		<div>
			<Header />
			<div className="error-content">
				<div className="error">
					<span className="error-msg">
						{msg} {":("}
					</span>
				</div>
			</div>
		</div>
	);
};
