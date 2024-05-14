import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Typography } from "@mui/material";
import MovieCard from "./MovieCard";

export default function MovieList({ title, movies }) {
    return (
        <section style={{ margin: '20px 0' }}>
        <Typography variant="h5" component="div" mb={2}>{title}</Typography>
        <AliceCarousel
            disableDotsControls
            items={movies.map((movie) => (
                <MovieCard movie={movie} />
            ))}
            responsive={{
                600: { items: 2 },
                768: { items: 3 },
                1024: { items: 4 },
                1320: { items: 5 },
                1400: { items: 6 }
            }}
        />
        </section>
    );
}
