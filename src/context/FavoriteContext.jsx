import { createContext, useEffect, useState } from "react";

// Crear el contexto para los favoritos
export const FavoriteContext = createContext();

export default function FavoriteContextProvider({ children }) {
    const [allFavorites, setAllFavorites] = useState(null); // Estado para almacenar la lista de favoritos

    /* MONTAJE */
    useEffect(() => {
        // Obtener los favoritos del localStorage cuando el componente se monta
        const favoritesLS = JSON.parse(localStorage.getItem("favorites"));
        if (favoritesLS) {
            setAllFavorites(favoritesLS); // Si hay favoritos guardados, actualiza el estado con ellos
        }
    }, []);

    /* ACTUALIZACION */
    useEffect(() => {
        // Actualizar el localStorage cuando cambia la lista de favoritos
        if (allFavorites !== null) {
            localStorage.setItem("favorites", JSON.stringify(allFavorites));
        }
    }, [allFavorites]);

    // Añade un favorito
    const addFavorite = (favorite) => {
        setAllFavorites([...allFavorites, favorite]);
    };

    // Elimina un favorito por su id
    const removeFavorite = (id) => {
        const newFavorites = allFavorites.filter( (favorite) => favorite.id !== id );
        setAllFavorites(newFavorites);
    };

    // Comprueba si es favorito por su id
    const isFavorite = (id) => {
        const exist = allFavorites.some((character) => character.id === id);
        return exist;
    };

    // Obtiene el número total de favoritos
    const totalFavorites = () => {
        return allFavorites?.length;
    };

    const data = {
        allFavorites,
        addFavorite,
        removeFavorite,
        isFavorite,
        totalFavorites,
    };

    return (
        <FavoriteContext.Provider value={data}>
            {children}
        </FavoriteContext.Provider>
    );
}
