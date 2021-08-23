import axios from "axios";
import { useState } from "react";

export const fetchImages = (query: string, collection: string) => {
    const [images, setImages] = useState([])

    axios.get(`https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_API_KEY}&query=${query}+${collection}&page=1&per_page=20`)
        .then(function (response) {
        // handle success
        setImages(response.data.results);
        })
        .catch(function (error) {
        // handle error
        console.error(error);
        })
        .then(function () {
            console.log("returned")
        });

    // return { images }
}