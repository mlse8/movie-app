import { useState, useContext } from "react";
import { styled, alpha } from "@mui/material/styles";
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    InputBase,
    MenuItem,
    Drawer,
    Badge,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MovieIcon from "@mui/icons-material/Movie";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import NavListDrawer from "../NavListDrawer";
import { FavoriteContext } from "../../context/FavoriteContext";

// Estilos para el componente de búsqueda
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
    [theme.breakpoints.up("xs")]: {
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
        [theme.breakpoints.up("xs")]: {
            width: "7ch",
            "&:focus": {
                width: "10ch",
            },
        },
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "17ch",
            },
        },
        [theme.breakpoints.up("md")]: {
            width: "15ch",
            "&:focus": {
                width: "20ch",
            },
        },
        [theme.breakpoints.up("lg")]: {
            width: "27ch",
            "&:focus": {
                width: "35ch",
            },
        },
    },
}));

export default function Header() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false); // Estado para controlar la apertura del drawer
    const { totalFavorites } = useContext(FavoriteContext); // Obtiene el total de favoritos del contexto
    const [searchQuery, setSearchQuery] = useState(""); // Estado para el query de búsqueda

    // Maneja el cambio en el campo de búsqueda
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        if (e.target.value) {
            navigate(`/search?query=${e.target.value}`); // Navega a la página de resultados de búsqueda
        }
        else {
            navigate('/');
        }
    }

    // Enlaces de navegación
    const navLinks = [
        {
            title: "Ultimos lanzamientos",
            path: "/new_movies",
        },
        {
            title: "Populares",
            path: "/popular",
        },
        {
            title: "Mejor puntuadas",
            path: "/top_rated",
        },
        {
            title: "Favoritos",
            path: "/favorites",
            badgeContent: totalFavorites(), // Muestra el total de favoritos como badge
        },
    ];

    return (
        <AppBar position="static" sx={{ backgroundColor: "#0F0F0F", maxWidth: "xl", margin: "auto" }}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Box display={"flex"} alignItems={"center"}>
                    <IconButton
                        color="inherit"
                        size="large"
                        onClick={() => setOpen(true)} // Abre el drawer
                        sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        size="large"
                        sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
                    >
                        <MovieIcon />
                    </IconButton>
                    <Typography
                        variant="h1"
                        fontSize={20}
                        sx={{ cursor: "pointer" }}
                        onClick={() => navigate("/")}
                    >
                        MovieApp
                    </Typography>
                </Box>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Buscar…"
                        inputProps={{ "aria-label": "search" }}
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </Search>
                <Box display={{ xs: "none", sm: "none", md: "flex" }}>
                    {navLinks.map((item) => (
                        <MenuItem
                            key={item.title}
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
                        </MenuItem>
                    ))}
                </Box>
                <Drawer
                    open={open}
                    onClose={() => setOpen(false)}
                    sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
                >
                    <NavListDrawer navLinks={navLinks} />
                </Drawer>
            </Toolbar>
        </AppBar>
    );
}
