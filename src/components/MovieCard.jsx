import imageNotFound from "../assets/image-not-found.png";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
    const navigate = useNavigate();
    const { id, title, poster_path } = movie;

    return (
        <Card
            key={id}
            sx={{
                minWidth: 230,
                maxWidth: 280,
                height: 400,
                margin: 1,
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                    transform: "scale(1.05)",
                },
            }}
            onClick={() => navigate(`/movie/${id}`)}
        >
            <CardMedia
                sx={{ height: 300, objectFit: "cover" }}
                alt="movie-poster"
                title={title}
                image={
                    poster_path
                        ? `https://image.tmdb.org/t/p/w370_and_h556_bestv2/${poster_path}`
                        : imageNotFound
                }
            />
            <CardContent>
                <Typography gutterBottom variant="h3" component="div" fontSize={"1.2rem"} fontWeight={"600"}>
                    {title}
                </Typography>
            </CardContent>
        </Card>
    );
}
