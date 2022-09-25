import Hero from "./Hero";
import { Link } from "react-router-dom";
import moviePoster from "./img/movie_poster.png";

const MovieCard = ({ movie }) => {
  let posterUrl = "";
  if (movie.poster_path !== "" && movie.poster_path != null) {
    posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  } else {
    posterUrl = moviePoster;
  }
  const detailUrl = `/movies/${movie.id}`;
  return (
    <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card">
        <img
          src={posterUrl}
          className="card-img-top"
          alt={movie.original_title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailUrl} className="btn btn-primary">
            Show details
          </Link>
        </div>
      </div>
    </div>
  );
};

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;

  const resultsHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  });

  const hasResults = resultsHtml.length > 0;

  console.log(resultsHtml);

  return (
    <>
      <Hero text={title} />
      {hasResults ? (
        <div className="container">
          <div className="row">{resultsHtml}</div>
        </div>
      ) : (
        <h3 className="text-center my-4">{`I'm sorry, but we couldn't find anything matching ${keyword} :(`}</h3>
      )}
    </>
  );
};

export default SearchView;
