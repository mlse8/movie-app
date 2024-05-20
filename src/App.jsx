import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Header from "./components/Header";
import ContainMovies from "./views/ContainMovies";
import ContainDetailMovie from "./views/ContainDetailMovie";
import Favorite from "./views/Favorite";
import FavoriteContextProvider from "./context/FavoriteContext.jsx";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <FavoriteContextProvider>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/new_movies"
                            element={<ContainMovies type="new" />}
                        />
                        <Route
                            path="/popular"
                            element={<ContainMovies type="popular" />}
                        />
                        <Route
                            path="/movie/:id"
                            element={<ContainDetailMovie />}
                        />
                        <Route path="/favorites" element={<Favorite />} />
                    </Routes>
                </FavoriteContextProvider>
            </BrowserRouter>
        </>
    );
}
