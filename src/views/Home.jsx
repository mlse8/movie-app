import { useEffect } from "react";
import { Box } from "@mui/material";
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
        <Box>
            <MovieList title="Películas Populares" movies={popularMovies} />
            <MovieList title="Películas Mejor Puntuadas" movies={topRatedMovies} />
        </Box>
    );
};