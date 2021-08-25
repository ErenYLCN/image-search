import React from "react";
import "./Pagination.scss";
import { Redirect, useHistory } from "react-router-dom";

interface Props {
	query: string;
	collection: string;
	currentPage: string;
	totalPages: number;
}

export const Pagination = ({
	query,
	collection,
	currentPage,
	totalPages,
}: Props) => {
	const history = useHistory();

	if (parseInt(currentPage) < 1) {
		return <Redirect to={`/images/${query}/${collection}/1`} />;
	}

	if (parseInt(currentPage) > totalPages) {
		return <Redirect to={`/images/${query}/${collection}/${totalPages}`} />;
	}

	return (
		<div className="pagination-content">
			<button
				disabled={parseInt(currentPage) <= 1}
				className="pagination-button"
				onClick={() => {
					history.push(
						`/images/${query}/${collection}/${parseInt(currentPage) - 1}`
					);
				}}
			>
				Previous
			</button>
			<div className="pagination-number">
				{currentPage} of {totalPages}
			</div>
			<button
				disabled={parseInt(currentPage) === totalPages}
				className="pagination-button"
				onClick={() => {
					history.push(
						`/images/${query}/${collection}/${parseInt(currentPage) + 1}`
					);
				}}
			>
				Next
			</button>
		</div>
	);
};
