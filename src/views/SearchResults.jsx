import { Container, Grid, Typography, Pagination } from "@mui/material";
import MovieCard from "../components/MovieCard";
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
            setCurrentQuery(query);
            handleChange(null,1)
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
                        <>
                            <Grid container columns={{ xs: 2, sm: 8, md: 10, xl: 12 }}>
                                {searchResults.map((movie) => (
                                    <Grid key={movie.id} item xs={2} sm={4} md={2} xl={2}>
                                        <MovieCard movie={movie} />
                                    </Grid>
                                ))}
                            </Grid>
                            <Pagination
                                page={page}
                                count={totalPages}
                                onChange={handleChange}
                                variant="outlined"
                                shape="rounded"
                                color="primary"
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    margin: "4rem 0",
                                }}
                            />
                        </>
                    ) : (
                        <Typography
                            variant="h5"
                            fontSize={{ xs: "1rem", md: "1.3rem" }}
                        >
                            No se encontraron resultados para tu búsqueda
                        </Typography>
                    )}
                </>
            )}
        </Container>
    );
}
