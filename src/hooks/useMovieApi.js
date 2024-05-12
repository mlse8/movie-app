import { useState } from "react";
import axios from "axios";

const API_KEY = "ba08b7822ed6e0c06f2d40d3760b2788";

export default function useMovieApi() {

    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);

    async function getPopularMovies() {
        try {
            const { data } = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`);
            setPopularMovies(data.results);
        } catch (error) {
            console.error("Error fetching popular movies:", error);
        }
    };

    async function getTopRatedMovies() {
        try {
            const { data } = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=es-ES&page=1`);
            setTopRatedMovies(data.results);
        } catch (error) {
            console.error("Error fetching top rated movies:", error);
        }
    };

    return { 
        popularMovies,
        getPopularMovies,
        topRatedMovies,
        getTopRatedMovies
    };
};