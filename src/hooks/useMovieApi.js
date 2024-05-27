import { useState } from "react";
import axios from "axios";

// Clave de la API de TMDB
const API_KEY = "ba08b7822ed6e0c06f2d40d3760b2788";

export default function useMovieApi() {
     // Estados para almacenar diferentes categorías de películas y datos relacionados
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [newMovies, setNewMovies] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [oneMovie, setOneMovie] = useState({});
    const [loading, setLoading] = useState(true);
    const [trailer, setTrailer] = useState([])

    // Obtiene datos de películas desde una URL y actualiza el estado correspondiente
    async function fetchMovies(url, setState) {
        try {
            const { data } = await axios(url); // Realiza la petición a la API
            setState(data.results); // Actualiza el estado con los resultados obtenidos
            setTotalPages(data.total_pages); // Actualiza el número total de páginas
        } catch (error) {
            console.error("Error fetching movies:", error);
        } finally {
            setLoading(false); // Indica que la carga ha terminado
        }
    }

    // Obtiene películas populares
    async function getPopularMovies() {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=${page}`;
        fetchMovies(url, setPopularMovies);
    };

    // Obtiene películas mejor puntuadas
    async function getTopRatedMovies() {
        const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=es-ES&page=${page}`;
        fetchMovies(url, setTopRatedMovies);
    };

    // Obtiene películas nuevas
    async function getNewMovies() {
        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=${page}`;
        fetchMovies(url, setNewMovies);
    };

    // Obtiene detalles de una película específica y su tráiler
    async function getOneMovie(id) {
        const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=es-ES`;
        const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=es-ES`;
        
        try {
            const [movieData, videoData] = await Promise.all([
                axios(movieUrl),
                axios(videoUrl)
            ]);
    
            setOneMovie(movieData.data); // Actualiza el estado con los detalles de la película
            setTrailer(videoData.data.results); // Actualiza el estado con los tráilers de la película
        } catch (error) {
            console.error("Error fetching movie details:", error);
        } finally {
            setLoading(false);
        }
    };    

    // Busca películas por una query
    async function searchMovies(query, page=1) {
        const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&api_key=${API_KEY}&language=es-ES&&page=${page}`;
        fetchMovies(url, setSearchResults);
    };

    // Maneja el cambio de página
    const handleChange = (event, value) => {
        setPage(value);
    };

    // Retorna las funciones y estados necesarios para ser utilizados en los componentes
    return { 
        loading,
        popularMovies,
        getPopularMovies,
        topRatedMovies,
        getTopRatedMovies,
        newMovies,
        getNewMovies,
        searchResults,
        searchMovies,
        page,
        totalPages,
        handleChange,
        oneMovie,
        trailer,
        getOneMovie
    };
}
