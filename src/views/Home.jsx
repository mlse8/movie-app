import { useEffect } from "react";
import useMovieApi from "../hooks/useMovieApi";
import MovieList from "../components/MovieList";
import Carousel from "../components/Carousel";

export default function Home() {
     // Obtiene las películas populares, mejor puntuadas y nuevas utilizando el custom hook useMovieApi
    const { popularMovies, getPopularMovies, topRatedMovies, getTopRatedMovies, newMovies, getNewMovies } = useMovieApi();
    
    // Se ejecuta al cargar el componente para obtener las películas populares, mejor puntuadas y nuevas
    useEffect(() => {
        getPopularMovies()
        getTopRatedMovies()
        getNewMovies()
    }, []);

    return (
        <>
            <Carousel movies={newMovies} />
            <MovieList title="Películas Populares" movies={popularMovies} />
            <MovieList title="Películas Mejor Puntuadas" movies={topRatedMovies} />
        </>
    );
};