import {
    Container,
    Box,
    Typography,
    Button,
    List,
    ListItem,
} from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useMovieApi from "../hooks/useMovieApi";

export default function ContainDetailMovie() {
    const { id } = useParams();
    const { oneMovie, getOneMovie } = useMovieApi();

    useEffect(() => {
        getOneMovie(id);
    }, []);

    const {
        genres,
        backdrop_path,
        poster_path,
        release_date,
        overview,
        title,
    } = oneMovie;

    const backgroundImageUrl =
        oneMovie &&
        (backdrop_path
            ? `https://image.tmdb.org/t/p/w1920_and_h1080_bestv2/${backdrop_path}`
            : `https://image.tmdb.org/t/p/w1920_and_h1080_bestv2/${poster_path}`);

    const releaseDate = new Date(release_date);
    const year = releaseDate.getFullYear();

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
                        sx={{flexDirection: { xs: 'column', sm: 'row' }}}
                    >
                        <Box marginBottom={1}>
                            <Typography
                                variant="h3"
                                fontWeight={"600"}
                                fontSize={"2rem"}
                            >
                                {title}
                            </Typography>
                            <Typography variant="body1">{year}</Typography>
                        </Box>
                        <Button
                            variant="contained"
                            startIcon={<PlayCircleIcon />}
                            sx={{
                                backgroundColor: "transparent",
                                boxShadow: "none",
                                marginRight: { xs: "auto", sm: "0"}
                            }}
                        >
                            Ver trailer
                        </Button>
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
                                    <ListItem key={id}>{name}</ListItem>
                                ))}
                        </List>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}
