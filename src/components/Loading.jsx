import { CircularProgress, Box, Typography } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';

export default function Loading() {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="50vh"
            textAlign="center"
        >
            <MovieIcon sx={{ fontSize: 50, color: 'white' }} />
            <Typography variant="h5" mt={2} mb={1} color={'white'}>
                Cargando...
            </Typography>
            <CircularProgress />
        </Box>
    );
};