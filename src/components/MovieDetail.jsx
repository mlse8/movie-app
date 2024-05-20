import { Box, Typography, Button, List, ListItem, IconButton } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState, useContext } from "react";
import MovieTrailer from "./MovieTrailer";
import { FavoriteContext } from "../context/FavoriteContext";

export default function MovieDetail({movie, trailer}) {
    const { genres, poster_path, release_date, overview, title, runtime, vote_average } = movie;

    const releaseDate = new Date(release_date);
    const year = releaseDate.getFullYear();

    const { addFavorite, isFavorite, removeFavorite } = useContext(FavoriteContext);

    const renderStarRating = (rating) => {
        const fullStars = Math.floor(rating / 2);
        const halfStar = rating % 2 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
        const stars = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push(<StarIcon key={crypto.randomUUID()} />);
        }
        if (halfStar) {
            stars.push(<StarHalfIcon key={crypto.randomUUID()} />);
        }
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<StarBorderIcon key={crypto.randomUUID()} />);
        }
    
        return stars;
    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleFavoriteClick = () => {
        isFavorite(movie.id) ? removeFavorite(movie.id) : addFavorite(movie)
    };

    return (
        <Box
            maxWidth="xl"
            display={"flex"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            gap={10}
            zIndex={2}
            sx={{ padding: "2rem 1rem" }}
        >
            <Box maxWidth="sm">
                <img
                    src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${poster_path}`}
                    width={"100%"}
                />
            </Box>
            <Box maxWidth="md" color={"white"}>
                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    marginBottom={5}
                    sx={{ flexDirection: { xs: "column", sm: "row" } }}
                >
                    <Box marginBottom={1}>
                        <Box display={"flex"}>
                            <Typography
                                variant="h3"
                                fontWeight={"600"}
                                fontSize={"2rem"}
                            >
                                {title}
                            </Typography>
                            <IconButton onClick={handleFavoriteClick} sx={{ color: "white" }}>
                                {isFavorite(movie.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                            </IconButton>
                        </Box>
                        <Typography variant="body1">{year}</Typography>
                    </Box>
                    <Button
                        variant="contained"
                        startIcon={<PlayCircleIcon />}
                        sx={{
                            backgroundColor: "transparent",
                            boxShadow: "none",
                            marginRight: { xs: "auto", sm: "0" },
                            ":hover": { backgroundColor: "rgba(3,3,3,0.6)" }
                        }}
                        onClick={handleOpen}
                    >
                        Ver trailer
                    </Button>
                    {open && <MovieTrailer trailer={trailer} handleClose={handleClose} />}
                </Box>
                <Box>
                    <Typography
                        variant="h4"
                        fontWeight={"500"}
                        fontSize={"1.2rem"}
                        marginBottom={2}
                    >
                        General
                    </Typography>
                    <Typography variant="body1">{overview}</Typography>
                    <Typography
                        variant="h4"
                        fontWeight={"500"}
                        fontSize={"1.2rem"}
                        marginTop={2}
                    >
                        Géneros
                    </Typography>
                    <List>
                        {genres &&
                            genres.map(({ id, name }) => (
                                <ListItem key={id} sx={{ "&::before": { content: '"\\2022"', marginRight: "0.5rem"  }} }>
                                    {name}
                                </ListItem>
                            ))}
                    </List>
                    <Box display={"flex"} gap={1}>
                        <Typography
                            variant="h4"
                            fontWeight={"500"}
                            fontSize={"1.2rem"}
                        >
                            Duración: 
                        </Typography>
                        <Typography variant="body1">{runtime} minutos.</Typography>
                    </Box>
                    <Box display={"flex"} gap={1} marginTop={2}>
                        <Typography
                            variant="h4"
                            fontWeight={"500"}
                            fontSize={"1.2rem"}
                        >
                            Puntuación: 
                        </Typography>
                        <Typography variant="body1" display={"inline"}>
                            {renderStarRating(vote_average)}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}