import imageNotFound from "../assets/image-not-found.png";
import {
    Card,
    CardContent,
    CardMedia,
    CardActions,
    Typography,
    IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";

export default function MovieCard({ movie }) {
    const navigate = useNavigate();
    const { id, title, poster_path } = movie;

    const { addFavorite, isFavorite, removeFavorite } = useContext(FavoriteContext);

    const handleFavoriteClick = (e) => {
        e.stopPropagation();
        if (isFavorite(movie.id)) {
            removeFavorite(movie.id);
        } else {
            addFavorite(movie);
        }
    };

    return (
        <Card
            key={id}
            sx={{
                minWidth: 230,
                maxWidth: 280,
                height: 400,
                backgroundColor: "#F1F1F1",
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
            <CardContent sx={{ display: "flex" }}>
                <Typography
                    gutterBottom
                    variant="h3"
                    component="div"
                    fontSize={"1.2rem"}
                    fontWeight={"600"}
                    flexGrow={1}
                >
                    {title}
                </Typography>
                <CardActions>
                    <IconButton
                        onClick={handleFavoriteClick}
                        sx={{ color: isFavorite(movie.id) ? "red" : "gray" }}
                    >
                        {isFavorite(movie.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                </CardActions>
            </CardContent>
        </Card>
    );
}
