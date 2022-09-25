import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import moviePoster from "./img/movie_poster.png";

const MovieView = () => {
  const { id } = useParams();
  console.log(id);

  const [movieDetails, setMovieDetails] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=dd60bbc8f34edb4bbbe30c373d4cfbaa&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false);
      });
  }, [id]);

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    if (movieDetails) {
      console.log(movieDetails);
      let posterPath = "";

      if (movieDetails.poster_path !== "" && movieDetails.poster_path != null) {
        posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
      } else {
        posterPath = moviePoster;
      }

      const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;

      return (
        <>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={posterPath}
                  alt={movieDetails.original_title}
                  className="img-fluid shadow rounded"
                />
              </div>
              <div className="col-md-9">
                <h1>{movieDetails.original_title}</h1>
                <p className="h6">{movieDetails.genres[0].name}</p>
                <p className="lead">{movieDetails.overview}</p>
                <p className="lead">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="25"
                    fill="currentColor"
                    className="bi bi-star"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                  </svg>{" "}
                  {movieDetails.vote_average.toFixed(2)}
                </p>
                <p className="lead">
                  <b>Released in:</b> {movieDetails.release_date}
                </p>
              </div>
            </div>
          </div>
        </>
      );
    }
  }

  return renderMovieDetails();
};

export default MovieView;
