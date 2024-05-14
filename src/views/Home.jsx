import { useEffect } from "react";
import useMovieApi from "../hooks/useMovieApi";
import MovieList from "../components/MovieList";

export default function Home() {
    const { popularMovies, getPopularMovies } = useMovieApi();
    const { topRatedMovies, getTopRatedMovies } = useMovieApi();

    useEffect(() => {
        getPopularMovies()
        getTopRatedMovies()
    }, []);

    return (
        <div>
            <MovieList title="Películas Populares" movies={popularMovies} />
            <MovieList title="Películas Mejor Puntuadas" movies={topRatedMovies} />
        </div>
    );
};