import React from "react";
import imageNotFound from "../assets/image-not-found.png";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
//import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
    const { id, title, backdrop_path } = movie;

    return (
        <Card
            key={id}
            sx={{
                minWidth: 230,
                maxWidth: 280,
                height: 365,
                margin: 1,
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                    transform: "scale(1.05)",
                },
            }}
        >
            <CardMedia
                sx={{ height: 255, objectFit: "cover" }}
                alt="movie-poster"
                title={title}
                image={
                    backdrop_path
                        ? `https://image.tmdb.org/t/p/w370_and_h556_bestv2/${backdrop_path}`
                        : imageNotFound
                }
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {title}
                </Typography>
            </CardContent>
        </Card>
    );
}
