import React, { useState, useEffect, useRef } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { fetchImages } from "../../API/api";
import { Modal } from "../../components/Modal/Modal";
import { Spinner } from "../../components/Spinner/Spinner";
import Masonry from "react-masonry-css";
import "./ImagesPage.scss";

interface Props
	extends RouteComponentProps<{ query: string; collection: string }> {}

export const ImagesPage: React.FC<Props> = ({ match }) => {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [modalOpen, setModalOpen] = useState(true);
	const [chosenImage, setChosenImage] = useState(undefined);

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

	const breakpointColumnsObj = {
		default: 3,
		980: 2,
		500: 1,
	};

	return (
		<div className="images-page">
			<Header />

			{isLoading && (
				<div className="loading">
					<Spinner />
				</div>
			)}

			{!isLoading && (
				<div className="images-page-content">
					<Masonry
						breakpointCols={breakpointColumnsObj}
						className="my-masonry-grid"
						columnClassName="my-masonry-grid_column"
					>
						{images.map((image: any) => {
							return (
								<div
									className="image-container"
									onClick={() => {
										setChosenImage(image);
										setModalOpen(true);
									}}
									key={image.id}
								>
									<img src={image.urls.small} alt={image["alt_description"]} />
								</div>
							);
						})}
					</Masonry>
				</div>
			)}

			{chosenImage && (
				<Modal open={modalOpen} setOpen={setModalOpen} image={chosenImage} />
			)}
		</div>
	);
};
