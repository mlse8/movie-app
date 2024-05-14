import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Header from "./components/Header";
import ContainMovies from "./views/ContainMovies";

export default function App() {
    return (
    <>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new_movies" element={<ContainMovies type="new" />} />
                <Route path="/popular" element={<ContainMovies type="popular" />} />
            </Routes>
        </BrowserRouter>
    </>
    )
}
