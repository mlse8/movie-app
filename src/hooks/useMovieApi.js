import { useState } from "react";
import axios from "axios";

const API_KEY = "ba08b7822ed6e0c06f2d40d3760b2788";

export default function useMovieApi() {

    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [newMovies, setNewMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [oneMovie, setOneMovie] = useState({});
    const [loading, setLoading] = useState(true);
    const [trailer, setTrailer] = useState({})

    async function fetchMovies(url, setState) {
        try {
            const { data } = await axios(url);
            setState(data.results);
            setTotalPages(data.total_pages);
        } catch (error) {
            console.error("Error fetching movies:", error);
        } finally {
            setLoading(false);
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

    async function getOneMovie(id) {
        const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=es-ES`;
        const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=es-ES`;
        
        try {
            const [movieData, videoData] = await Promise.all([
                axios(movieUrl),
                axios(videoUrl)
            ]);
    
            setOneMovie(movieData.data);
            setTrailer(videoData.data.results);
        } catch (error) {
            console.error("Error fetching movie details:", error);
        } finally {
            setLoading(false);
        }
    };    

    const handleChange = (event, value) => {
        setPage(value);
    };

    return { 
        loading,
        popularMovies,
        getPopularMovies,
        topRatedMovies,
        getTopRatedMovies,
        newMovies,
        getNewMovies,
        page,
        totalPages,
        handleChange,
        oneMovie,
        trailer,
        getOneMovie
    };
}
