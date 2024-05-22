import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, ContainMovies, ContainDetailMovie, Favorite, SearchResults, NotFound } from "./views";
import Header from "./components/Header";
import Footer from "./components/Footer.jsx";
import FavoriteContextProvider from "./context/FavoriteContext.jsx";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <FavoriteContextProvider>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/new_movies" element={<ContainMovies type="new" />} />
                        <Route path="/popular" element={<ContainMovies type="popular" />} />
                        <Route path="/movie/:id" element={<ContainDetailMovie />} />
                        <Route path="/favorites" element={<Favorite />} />
                        <Route path="/search" element={<SearchResults />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </FavoriteContextProvider>
            </BrowserRouter>
        </>
    );
}
