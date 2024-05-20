import { Container, Typography, Grid } from "@mui/material";
import MovieCard from "../components/MovieCard";
import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";

export default function Favorite() {
    const { allFavorites } = useContext(FavoriteContext);

    return (
        <Container maxWidth="2xl" sx={{ color: "white" }}>
            <Typography
                variant="h2"
                align="center"
                fontSize={"2rem"}
                fontWeight={500}
                padding={2}
            >
                Tus Favoritos
            </Typography>
            <Grid container columns={{ xs: 2, sm: 8, md: 12, xl: 12 }}>
                {allFavorites &&
                    allFavorites.map((favorite) => (
                        <Grid
                            key={favorite.id}
                            item
                            xs={2}
                            sm={4}
                            md={3}
                            xl={2}
                        >
                            <MovieCard movie={favorite} />
                        </Grid>
                    ))}
            </Grid>
        </Container>
    );
}
