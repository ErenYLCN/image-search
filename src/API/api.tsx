import axios from "axios";

export const fetchImages = async (
	query: string,
	collection: string,
	pageNumber: string
) => {
	const collections = await axios.get(
		`https://api.unsplash.com/search/collections?client_id=${process.env.REACT_APP_API_KEY}&query=${query}+${collection}&per_page=30`
	);

	const collectionArray: Array<any> = collections.data.results;
	let collectionString = "";
	collectionArray.map((collection) => {
		collectionString += `${collection.id},`;
	});

	const { data } = await axios.get(
		`https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_API_KEY}&query=${query}+${collection}&page=${pageNumber}&per_page=30&collections=${collectionString}`
	);

	return data;
};
