import { Grid, Pagination } from "@mui/material";
import MovieCard from "../components/MovieCard";

export default function MovieCatalog({movies, page, totalPages, handleChange}) {
    return (
        <>
            <Grid container columns={{ xs: 2, sm: 8, md: 10, lg:10, xl: 12 }}>
                {movies.map((movie) => (
                    <Grid key={movie.id} item xs={2} sm={4} md={3} lg={2} xl={2}>
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
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "4rem 0",
                    "& .MuiPaginationItem-root": {
                        color: "white",
                        borderColor: "white",
                    },
                    "& .Mui-selected": {
                        backgroundColor: "white",
                        color: "black",
                    },
                }}
            />
        </>
    );
}
