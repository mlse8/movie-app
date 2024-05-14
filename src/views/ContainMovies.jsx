import { Container, Grid, Typography, Pagination } from "@mui/material";
import MovieCard from "../components/MovieCard";
import { useEffect } from "react";
import useMovieApi from "../hooks/useMovieApi";

export default function ContainMovies({type}) {
    const { popularMovies, getPopularMovies, newMovies, getNewMovies, page, totalPages, handleChange } = useMovieApi();

    useEffect(() => {
        type === 'popular' ? getPopularMovies() : getNewMovies();
    }, [type, page]);

    let movies = [];
    type === 'popular' ? movies = popularMovies : movies = newMovies;

    return (
        <Container 
            maxWidth="2xl"
            sx={{color: "white"}}
        >
            <Typography 
                variant="h2" 
                align="center" 
                fontSize={"2rem"} 
                fontWeight={500}
                padding={2}
            >
                {type === 'popular' && 'Películas Populares'}
                {type === 'new' && 'Últimos Lanzamientos'}
            </Typography>
            <Grid 
                container 
                columns={{ xs: 2, sm: 8, md: 12, xl: 12 }}
            >
                {movies.map((movie) => (
                    <Grid item xs={2} sm={4} md={3} xl={2}>
                        <MovieCard movie={movie} />
                    </Grid>
                ))}
            </Grid>
            <Pagination 
                count={totalPages}
                onChange={handleChange}
                variant="outlined"
                shape="rounded"
                color="primary"
                sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    margin: '4rem 0',
                }}
            />
        </Container>
    );
}
