import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useMovieApi from "../hooks/useMovieApi";
import MoviePoster from "../components/MoviePoster";
import Loading from "../components/Loading";

export default function ContainDetailMovie() {
    const { id } = useParams();
    const { loading, oneMovie, trailer, getOneMovie } = useMovieApi();

    useEffect(() => {
        getOneMovie(id);
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