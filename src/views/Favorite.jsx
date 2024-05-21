import { Container, Typography, Grid, Box, Button } from "@mui/material";
import MovieCard from "../components/MovieCard";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FavoriteContext } from "../context/FavoriteContext";
import sadness from "../assets/sadness.gif";

export default function Favorite() {
    const navigate = useNavigate();
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
            {allFavorites && allFavorites.length > 0 ? (
                <Grid container spacing={2} columns={{ xs: 2, sm: 8, md: 10, xl: 12 }}>
                    {allFavorites.map((favorite) => (
                        <Grid
                            key={favorite.id}
                            item
                            xs={2}
                            sm={4}
                            md={2}
                            xl={2}
                        >
                            <MovieCard movie={favorite} />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Box 
                    maxWidth={"sm"} 
                    margin={"auto"} 
                    display={"flex"} 
                    flexDirection={"column"} 
                    justifyContent={"center"} 
                    alignItems={"center"} 
                    gap={2}
                    marginTop={4}
                >
                    <img src={sadness} alt="No favorites found" width={"90%"} />
                    <Typography
                        variant="h5"
                        fontSize={{xs: "1rem", md: "1.3rem"}}
                    >
                        Aún no tienes favoritos guardados
                    </Typography>
                    <Button color="inherit" onClick={() => navigate("/")} >
                        Explorar películas
                    </Button>
                </Box>
            )}
        </Container>
    );
}
