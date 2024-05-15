import { Box, Typography, Button, List, ListItem } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

export default function MovieDetail({movie}) {
    const { genres, poster_path, release_date, overview, title } = movie;

    const releaseDate = new Date(release_date);
    const year = releaseDate.getFullYear();

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
                            marginRight: { xs: "auto", sm: "0" },
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
    );
}
