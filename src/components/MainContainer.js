import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
    const movies = useSelector(
        (store) => store.movie?.nowPlayingMovies
    );

    if (!movies) return;

    const mainMovie = movies[0];


    const { original_title, overview, id } = mainMovie;
    return (
        <div className="mb-20 bg-gradient-to-t from bg-black">
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    );
};

export default MainContainer;