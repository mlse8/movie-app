import { useState } from "react";
import axios from "axios";

const API_KEY = "ba08b7822ed6e0c06f2d40d3760b2788";

export default function useMovieApi() {

    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [newMovies, setNewMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    async function fetchMovies(url, setState) {
        try {
            const { data } = await axios.get(url);
            setState(data.results);
            setTotalPages(data.total_pages);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    }

    async function getPopularMovies() {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=${page}`;
        fetchMovies(url, setPopularMovies);
    };

    async function getTopRatedMovies() {
        const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=es-ES&page=${page}`;
        fetchMovies(url, setTopRatedMovies);
    };

    async function getNewMovies() {
        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=${page}`;
        fetchMovies(url, setNewMovies);
    };

    const handleChange = (event, value) => {
        setPage(value);
    };

    return { 
        popularMovies,
        getPopularMovies,
        topRatedMovies,
        getTopRatedMovies,
        newMovies,
        getNewMovies,
        page,
        totalPages,
        handleChange
    };
}
