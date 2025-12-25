import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);

  return (
    movies.nowPlayingMovies && (
    <div className="  bg-black" >
      <div className="relative z-20 pl-16 -mt-16">
      <MovieList
        title={"Now Playing"}
        movies={movies.nowPlayingMovies}
      />
      <MovieList
        title={"Trending"}
        movies={movies.nowPlayingMovies}
      />
      <MovieList 
        title={"Popular"}
        movies={movies.nowPlayingMovies}
      />
      <MovieList
        title={"Upcoming Movies"}
        movies={movies.nowPlayingMovies}
      />
      <MovieList
        title={"Horror"}
        movies={movies.nowPlayingMovies}
      />
    </div>
    </div>
    )
  );
};

export default SecondaryContainer;



