import { Box, List, ListItem, ListItemButton, Badge } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";

export default function NavListDrawer({ navLinks }) {
    const navigate = useNavigate();

    return (
        <Box
            color={"white"}
            sx={{ height: "100vh", width: 250, backgroundColor: "#1E1E1E" }}
        >
            <nav>
                <List>
                    {navLinks.map((item) => (
                        <ListItem disablePadding key={item.title}>
                            <ListItemButton 
                                sx={{ ":hover": { backgroundColor: "#222" } }} 
                                onClick={() => navigate(item.path)}
                            >
                                {item.title}
                                {item.badgeContent !== undefined && (
                                    <Badge
                                        badgeContent={item.badgeContent}
                                        color="error"
                                        sx={{ marginLeft: 0.5 }}
                                    >
                                        <FavoriteIcon color="inherit" />
                                    </Badge>
                                )}
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </nav>
        </Box>
    );
}
