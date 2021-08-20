import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Header } from "../../components/Header/Header";

interface Props
	extends RouteComponentProps<{ query: string; collection: string }> {}

export const ImagesPage: React.FC<Props> = ({ match }) => {
	console.log(match);
	return (
		<div className="images-page">
			<Header />
		</div>
	);
};
