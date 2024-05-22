import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CarouselItem({movie}) {
    const navigate = useNavigate();
    const { id, title, poster_path, backdrop_path, overview } = movie;

    const backgroundImageUrl =
        backdrop_path
            ? `https://image.tmdb.org/t/p/w1920_and_h1080_bestv2/${backdrop_path}`
            : `https://image.tmdb.org/t/p/w1920_and_h1080_bestv2/${poster_path}`;

    return (
        <Box 
            height={"60vh"}
            padding={5}
            display={"flex"}
                justifyContent={"center"}
                alignContent={"center"}
            sx={{
                backgroundImage: `url(${backgroundImageUrl})`, 
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            <Box 
                key={id}
                maxWidth={"sm"}
                margin={"auto"}
                padding={3}
                sx={{
                    backgroundColor: "rgba(230,230,230,0.5)", 
                    borderRadius: "1rem",
                    cursor: "pointer"
                }}
                onClick={() => navigate(`/movie/${id}`)}
            >
                <Typography 
                    variant="h3"
                    fontSize={{ xs: "1rem", md: "1.2rem", lg: "1.4rem"}} 
                    fontWeight={"600"}
                    textAlign={"center"}
                    marginBottom={1}
                >
                    {title}
                </Typography>
                <Typography variant="body2" fontSize={{ xs: ".8rem", md: ".9rem" }} >{overview}</Typography>
                
            </Box>
        </Box>
    );
}