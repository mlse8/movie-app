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
        topRatedMovies,
        getTopRatedMovies,
        page,
        totalPages,
        handleChange,
    } = useMovieApi(); // Utiliza el customhook para obtener datos de películas y paginación

    // Se ejecuta cuando cambia la ubicación de la ruta
    useEffect(() => {
        handleChange(null, 1); // Resetea la página a 1 cada vez que cambia la ubicación
    }, [location]);

    // Se ejecuta cuando cambia el tipo de películas o la página actual
    useEffect(() => {
        // Obtiene las películas populares o los nuevos lanzamientos según el tipo y la página actual
        if (type === "popular")  
            getPopularMovies() 
        else if (type === "new") 
            getNewMovies();
        else
            getTopRatedMovies();
    }, [type, page]);

    let movies = [];
    // Determina qué películas mostrar según el tipo
    if (type === "popular")  
        (movies = popularMovies) 
    else if (type === "new")
        (movies = newMovies);
    else
        (movies = topRatedMovies);

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
                        {type === "top" && "Mejor puntuadas"}
                    </Typography>
                    <MovieCatalog movies={movies} page={page} totalPages={totalPages} handleChange={handleChange} />
                </Container>
            )}
        </>
    );
}
