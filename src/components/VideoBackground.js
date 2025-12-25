import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const FALLBACK_VIDEO_ID = "nb_fFj_0rq8";

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(
        (store) => store.movies?.trailerVideo
    );

    useMovieTrailer(movieId);

    return (
        <div className="w-screen h-screen overflow-hidden relative">
            {trailerVideo?.key ? (
                // TMDB trailer
                <iframe
                    className="absolute -top-5 left-0 w-screen h-screen scale-125"
                    src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            ) : (
                // FALLBACK trailer
                <iframe
                    className="absolute -top-5 left-0 w-screen h-screen scale-125"
                    src={`https://www.youtube.com/embed/${FALLBACK_VIDEO_ID}?autoplay=1&mute=1`}
                    title="Fallback YouTube video"
                    frameBorder="0"
                    allow="autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            )}
        </div>
    );
};

export default VideoBackground;
