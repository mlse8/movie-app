import { createContext, useEffect, useState } from "react";

export const FavoriteContext = createContext();

export default function FavoriteContextProvider({ children }) {
    const [allFavorites, setAllFavorites] = useState(null);

    /* MONTAJE */
    useEffect(() => {
        const favoritesLS = JSON.parse(localStorage.getItem("favorites"));
        if (favoritesLS) {
            setAllFavorites(favoritesLS);
        }
    }, []);

    /* ACTUALIZACION */
    useEffect(() => {
        if (allFavorites !== null) {
            localStorage.setItem("favorites", JSON.stringify(allFavorites));
        }
    }, [allFavorites]);

    const addFavorite = (favorite) => {
        setAllFavorites([...allFavorites, favorite]);
    };

    const removeFavorite = (id) => {
        const newFavorites = allFavorites.filter( (favorite) => favorite.id !== id );
        setAllFavorites(newFavorites);
    };

    const isFavorite = (id) => {
        const exist = allFavorites.some((character) => character.id === id);
        return exist;
    };

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
