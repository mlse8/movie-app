import NotFound404 from "../assets/404.png";
import { Box } from "@mui/material";

// Renderiza una imagen cuando la página no se pudo encontrar
export default function NotFound() {
    return (
        <Box>
            <img
                src={NotFound404}
                alt="Pagina no encontrada"
                style={{ width: "100%" }}
            />
        </Box>
    )
}