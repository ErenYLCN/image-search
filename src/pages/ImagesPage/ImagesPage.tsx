import React, { useState, useEffect, useRef } from "react";
import { Redirect, RouteComponentProps } from "react-router-dom";
import Masonry from "react-masonry-css";
import { fetchImages } from "../../API/api";
import { collectionList } from "../../data/data";
import { Header } from "../../components/Header/Header";
import { Modal } from "../../components/Modal/Modal";
import { Spinner } from "../../components/Spinner/Spinner";
import { Pagination } from "../../components/Pagination/Pagination";
import "./ImagesPage.scss";

interface Props
	extends RouteComponentProps<{
		query: string;
		collection: string;
		pageNumber: string;
	}> {}

export const ImagesPage = ({ match }: Props) => {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [modalOpen, setModalOpen] = useState(true);
	const [chosenImage, setChosenImage] = useState(undefined);
	const [totalPages, setTotalPages] = useState(1);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);

			try {
				const data = await fetchImages(
					match.params.query,
					match.params.collection,
					match.params.pageNumber
				);
				setTotalPages(data["total_pages"]);
				setImages(data.results);
			} catch (err) {
				console.error(err);
			}

			setIsLoading(false);
		};
		fetchData();
	}, [match.params.query, match.params.collection, match.params.pageNumber]);

	if (!collectionList.includes(match.params.collection)) {
		return <Redirect to="/notFound" />;
	}

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
						breakpointCols={{
							default: 3,
							980: 2,
							500: 1,
						}}
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
					<div className="pagination-section">
						<Pagination
							query={match.params.query}
							collection={match.params.collection}
							currentPage={match.params.pageNumber}
							totalPages={totalPages}
						/>
					</div>
				</div>
			)}

			{chosenImage && (
				<Modal open={modalOpen} setOpen={setModalOpen} image={chosenImage} />
			)}
		</div>
	);
};
