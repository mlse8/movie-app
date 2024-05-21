import { Container, Typography } from "@mui/material";
import MovieCatalog from "../components/MovieCatalog";
import Loading from "../components/Loading";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useMovieApi from "../hooks/useMovieApi";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function SearchResults() {
    const query = useQuery().get("query");
    const { searchResults, searchMovies, loading, page, totalPages, handleChange } = useMovieApi();
    const [currentQuery, setCurrentQuery] = useState(query);

    useEffect(() => {
        if (currentQuery !== query) {
            handleChange(null, 1);
            setCurrentQuery(query);
        }
        if (query) {
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
