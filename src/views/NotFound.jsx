import NotFound404 from "../assets/404.png";
import { Box } from "@mui/material";

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