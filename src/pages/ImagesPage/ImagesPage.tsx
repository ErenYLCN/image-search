import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { fetchImages } from "../../API/api";
import "./ImagesPage.scss";

interface Props
	extends RouteComponentProps<{ query: string; collection: string }> {}

export const ImagesPage: React.FC<Props> = ({ match }) => {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const data = await fetchImages(
					match.params.query,
					match.params.collection
				);
				setImages(data.results);
			} catch (err) {
				console.error(err);
			}
			setIsLoading(false);
		};
		fetchData();
	}, [match.params.query, match.params.collection]);

	return (
		<div className="images-page">
			<Header />
			{isLoading && <div className="loading"> Loading </div>}

			{!isLoading && (
				<div className="images-page-content">
					{images.map((image: any) => {
						return (
							<div className="image-container" onClick={() => alert("hello")}>
								<img src={image.urls.full} />
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};
