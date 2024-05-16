import { useEffect } from "react";
import useMovieApi from "../hooks/useMovieApi";
import MovieList from "../components/MovieList";
import Carousel from "../components/Carousel";

export default function Home() {
    const { popularMovies, getPopularMovies, topRatedMovies, getTopRatedMovies, newMovies, getNewMovies } = useMovieApi();

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