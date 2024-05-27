import { Container, Typography } from "@mui/material";
import MovieCatalog from "../components/MovieCatalog";
import Loading from "../components/Loading";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useMovieApi from "../hooks/useMovieApi";

function useQuery() {
    // Devuelve un objeto URLSearchParams basado en la query de la ubicación actual
    return new URLSearchParams(useLocation().search);
}

export default function SearchResults() {
    const query = useQuery().get("query"); // Obtiene el valor de la query "query" de la URL
    const { searchResults, searchMovies, loading, page, totalPages, handleChange } = useMovieApi(); // Obtiene los resultados de la búsqueda de la API y la paginación del custom hook
    const [currentQuery, setCurrentQuery] = useState(query); // Estado local para almacenar la query actual

    useEffect(() => {
        // Se ejecuta cuando cambia la query o la página
        if (currentQuery !== query) {
            // Si la query actual es diferente de la nueva query, resetea la página a 1
            handleChange(null, 1);
            setCurrentQuery(query); // Actualiza la query actual
        }
        if (query) {
            // Si hay una query válida, realiza una nueva búsqueda
            searchMovies(query, page);
        }
    }, [query, page]);

    return (
        <Container maxWidth="2xl" sx={{ color: "white" }}>
            <Typography
                variant="h3"
                fontSize={"1.3rem"}
                fontWeight={500}
                padding={2}
            >
                Resultados para "{currentQuery}"
            </Typography>
            {loading ? (
                <Loading />
            ) : (
                <>
                    {searchResults && searchResults.length > 0 ? (
                        <MovieCatalog movies={searchResults} page={page} totalPages={totalPages} handleChange={handleChange} />
                    ) : (
                        <Typography
                            variant="h5"
                            fontSize={{ xs: "1rem", md: "1.3rem" }}
                            textAlign={"center"}
                            marginTop={4}
                        >
                            No se encontraron resultados para tu búsqueda
                        </Typography>
                    )}
                </>
            )}
        </Container>
    );
}
