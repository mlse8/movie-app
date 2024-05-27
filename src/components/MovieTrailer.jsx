import { Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReactPlayer from "react-player";

export default function MovieTrailer({ trailer, handleClose }) {
    if (!trailer || trailer.length === 0) return null;
    const youtubeUrl = `https://www.youtube.com/watch?v=${trailer[0].key}`;

    return (
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
