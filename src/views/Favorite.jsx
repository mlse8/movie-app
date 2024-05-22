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
        <Container maxWidth="xl" sx={{ color: "white" }}>
            <Typography
                variant="h2"
                align="center"
                fontSize={{xs: "1.3rem", lg: "1.8rem"}}
                fontWeight={500}
                padding={2}
            >
                Tus Favoritos
            </Typography>
            {allFavorites && allFavorites.length > 0 ? (
                <Grid container columns={{ xs: 4, sm: 12, md: 10, lg:12, xl: 7 }}>
                    {allFavorites.map((favorite) => (
                        <Grid
                            key={favorite.id}
                            item
                            xs={2}
                            sm={4}
                            md={2}
                            lg={2}
                            xl={1}
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
