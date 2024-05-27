import { Container, Typography } from "@mui/material";
import MovieCatalog from "../components/MovieCatalog";
import Loading from "../components/Loading";
import { useEffect } from "react";
import useMovieApi from "../hooks/useMovieApi";
import { useLocation } from "react-router-dom";

export default function ContainMovies({ type }) {
    const location = useLocation();

    const {
        loading,
        popularMovies,
        getPopularMovies,
        newMovies,
        getNewMovies,
        page,
        totalPages,
        handleChange,
    } = useMovieApi();

    useEffect(() => {
        handleChange(null, 1);
    }, [location]);

    useEffect(() => {
        type === "popular" ? getPopularMovies() : getNewMovies();
    }, [type, page]);

    let movies = [];
    type === "popular" ? (movies = popularMovies) : (movies = newMovies);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <Container maxWidth="xl" sx={{ color: "white", padding: 0 }}>
                    <Typography
                        variant="h2"
                        align="center"
                        fontSize={{xs: "1.3rem", lg: "1.8rem"}}
                        fontWeight={500}
                        padding={2}
                    >
                        {type === "popular" && "Películas Populares"}
                        {type === "new" && "Últimos Lanzamientos"}
                    </Typography>
                    <MovieCatalog movies={movies} page={page} totalPages={totalPages} handleChange={handleChange} />
                </Container>
            )}
        </>
    );
}
