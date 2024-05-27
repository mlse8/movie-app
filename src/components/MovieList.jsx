import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Box, Typography } from "@mui/material";
import MovieCard from "./MovieCard";
import { createGlobalStyle } from "styled-components";

// Estilos para cambiar los controles del carrusel
const GlobalStyles = createGlobalStyle`
    .alice-carousel__prev-btn, .alice-carousel__next-btn {
        position: absolute;
        top: 0;
        width: 2rem;
        height: 100%;
        background-color: #121212 !important;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .alice-carousel__prev-btn {
        left: 0;
    }

    .alice-carousel__next-btn {
        right: 0;
    }

    .alice-carousel__prev-btn-item, .alice-carousel__next-btn-item {
        color: white !important;
        font-weight: bold !important;
    }
`;

// Renderiza el carrusel adaptable
export default function MovieList({ title, movies }) {
    return (
        <Box
            maxWidth={"xl"}
            component={"section"}
            color={"white"}
            sx={{ margin: "2rem auto" }}
        >
            <GlobalStyles />
            <Typography variant="h5" component="div" mb={2}>
                {title}
            </Typography>
            <AliceCarousel
                infinite
                disableDotsControls
                items={movies.map((movie) => (
                    <MovieCard movie={movie} />
                ))}
                responsive={{
                    375: { items: 2 },
                    480: { items: 3 },
                    620: { items: 4 },
                    800: { items: 5 },
                    1080: { items: 6 },
                    1220: { items: 7 },
                }}
            />
        </Box>
    );
}
