import { Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReactPlayer from "react-player";

export default function MovieTrailer({ trailer, handleClose }) {
    // Si no hay trailer o si el array de trailers está vacío, no renderizar nada
    if (!trailer || trailer.length === 0) return null;
    // Construye la URL del video de YouTube usando la clave del primer trailer
    const youtubeUrl = `https://www.youtube.com/watch?v=${trailer[0].key}`;

    return (
        // Componente Dialog para mostrar el trailer en un modal
        <Dialog open={true} fullWidth maxWidth={"md"}>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[100],
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent sx={{ padding: 0, overflow: "hidden" }}>
                <ReactPlayer url={youtubeUrl} controls={true} height={"70vh"} width={"100%"} />
            </DialogContent>
        </Dialog>
    );
}
