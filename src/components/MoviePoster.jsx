import { Container } from "@mui/material";
import MovieDetail from "./MovieDetail";

export default function MoviePoster( { movie } ) {

    const { backdrop_path, poster_path } = movie;

    const backgroundImageUrl =
        backdrop_path
            ? `https://image.tmdb.org/t/p/w1920_and_h1080_bestv2/${backdrop_path}`
            : `https://image.tmdb.org/t/p/w1920_and_h1080_bestv2/${poster_path}`;

    return (
        <Container
            maxWidth="2xl"
            sx={{
                backgroundImage: `url(${backgroundImageUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                minHeight: "90vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                "&::after": {
                    content: '""',
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                },
            }}
        >
            <MovieDetail movie={movie}/>
        </Container>
    );
}
