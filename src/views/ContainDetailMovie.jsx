import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useMovieApi from "../hooks/useMovieApi";
import MoviePoster from "../components/MoviePoster";
import Loading from "../components/Loading";

export default function ContainDetailMovie() {
    const { id } = useParams(); // Obtiene el parámetro de la URL correspondiente al id de la película
    const { loading, oneMovie, trailer, getOneMovie } = useMovieApi(); // Utiliza el customhook para obtener detalles de una sola película y su tráiler

    useEffect(() => {
        getOneMovie(id); // Obtiene los detalles de la película y su tráiler cuando el componente se monta
    }, []);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <MoviePoster movie={oneMovie} trailer={trailer} />
            )}
        </>
    );
}