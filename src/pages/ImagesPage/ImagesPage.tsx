import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { fetchImages } from "../../API/api"

interface Props
	extends RouteComponentProps<{ query: string; collection: string }> {}

export const ImagesPage: React.FC<Props> = ({ match }) => {

	console.log(match.params);

	// useEffect(() => {
	// 	const { images } = fetchImages(match.params.query, match.params.collection);
	// 	console.log(images);
	// 	setTimeout(() => {console.log(images)}, 2000)
	// }, [match.params.query, match.params.collection])

	

	return (
		<div className="images-page">
			<Header />
		</div>
	);
};
