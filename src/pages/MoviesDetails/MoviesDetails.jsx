import { getMovieDetails } from '../../api/index';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

export default function MoviesDetails() {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  
  const locationRef = useRef(useLocation().state);

  useEffect(() => {
    try {
      const response = getMovieDetails(movieId);
      response.then(data => {
        const {
          title,
          overview,
          poster_path,
          vote_average,
          genres,
          release_date,
        } = data;

        setMovieDetails({
          title,
          overview,
          poster_path,
          vote_average,
          genres,
          release_date,
        });
      });
    } catch (error) {}
  }, [movieId]);

  if (movieDetails) {
    const { title, overview, poster_path, vote_average, genres, release_date } =
      movieDetails;

    return (
      <>
        {locationRef.current && (
          <Link
            to={locationRef.current.location}
            state={locationRef.current.search}
          >
            &#8592; Go back
          </Link>
        )}
        <div>
          <img
            src={
             movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : defaultImg
            }
            alt={title}
          />
          <div>
            <h2>{`${title} (${release_date.slice(0, 4)})`}</h2>
            <p>{`User score: ${(vote_average * 10).toFixed(2)}%`}</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>{genres.map(({ name }) => `${name} `)}</p>
          </div>
        </div>
        <p>Additional information</p>
        <MovieDetails />
      </>
    );
  }

  return null;
}
