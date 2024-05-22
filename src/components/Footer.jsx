import { Container, Box, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Container sx={{ padding: "2.5rem 0" }}>
            <Box color={"white"} textAlign={"center"}>
                <Typography variant="body2">
                    &copy; 2024 - Laura Escalante
                </Typography>
                <Typography variant="body2" fontSize={".7rem"} marginTop={1}>
                    Data provided by{" "}
                    <Typography
                        component="a"
                        fontSize={".7rem"}
                        href="https://www.themoviedb.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        color={"white"}
                    >
                        TMDb
                    </Typography>
                </Typography>
            </Box>
        </Container>
    );
}
