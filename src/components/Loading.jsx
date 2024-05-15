import { Box, Typography } from "@mui/material";
import { hourglass } from "ldrs";

export default function Loading() {
    hourglass.register();
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="80vh"
            textAlign="center"
        >
            <l-hourglass
                size="50"
                bg-opacity="0.1"
                speed="1.5"
                color="white"
            ></l-hourglass>
            <Typography variant="h5" mt={2} mb={1} color={"white"}>
                Cargando...
            </Typography>
        </Box>
    );
}
