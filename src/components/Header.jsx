import React from "react";
import { styled, alpha } from "@mui/material/styles";
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    InputBase,
    MenuItem,
    Badge,
    Menu,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MovieIcon from "@mui/icons-material/Movie";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    display: "flex",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        [theme.breakpoints.up("md")]: {
            width: "15ch",
            "&:focus": {
                width: "25ch",
            },
        },
    },
}));

export default function Header() {
    const navigate = useNavigate();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Box component="div" sx={{ display: "flex" }}>
                        {isMobile ? (
                            <IconButton>
                                <MenuIcon onClick={handleMenuClick} />
                                <Typography 
                                    variant="h6" 
                                    paddingLeft={1}
                                    onClick={() => navigate("/")}
                                >
                                    MovieApp
                                </Typography>
                            </IconButton>
                        ) : (
                            <>
                                <IconButton>
                                    <MovieIcon />
                                    <Typography 
                                        variant="h6" 
                                        paddingLeft={1}
                                        onClick={() => navigate("/")}
                                    >
                                        MovieApp
                                    </Typography>
                                </IconButton>
                                <MenuItem onClick={() => navigate("/")}>
                                    Inicio
                                </MenuItem>
                                <MenuItem onClick={() => navigate("/new_movies")}>
                                    Últimos lanzamientos
                                </MenuItem>
                                <MenuItem onClick={() => navigate("/popular")}>
                                    Populares
                                </MenuItem>
                                <MenuItem>
                                    Favoritos
                                    <Badge badgeContent={4} color="error">
                                        <FavoriteIcon />
                                    </Badge>
                                </MenuItem>
                            </>
                        )}
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right",
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                        >
                            <MenuItem onClick={() => navigate("/")}>
                                Inicio
                            </MenuItem>
                            <MenuItem onClick={() => navigate("/new_movies")}>
                                Últimos lanzamientos
                            </MenuItem>
                            <MenuItem onClick={() => navigate("/popular")}>
                                Populares
                            </MenuItem>
                            <MenuItem>
                                Favoritos
                                <Badge badgeContent={4} color="error">
                                    <FavoriteIcon />
                                </Badge>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Buscar…"
                            inputProps={{ "aria-label": "search" }}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
