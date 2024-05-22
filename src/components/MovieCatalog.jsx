import { Grid, Pagination } from "@mui/material";
import MovieCard from "../components/MovieCard";

export default function MovieCatalog({movies, page, totalPages, handleChange}) {
    return (
        <>
            <Grid container columns={{ xs: 4, sm: 12, md: 10, lg:12, xl: 7 }}>
                {movies.map((movie) => (
                    <Grid key={movie.id} item xs={2} sm={4} md={2} lg={2} xl={1}>
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
