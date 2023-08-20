import MovieItem from '../MovieItem/MovieItem';
import PropTypes from 'prop-types';

export default function Movies({ movies }) {
  return (
    <>
      <ul>
        {movies.map(({ id, title }) => (
          <MovieItem key={id} title={title} id={id} />
        ))}
      </ul>
    </>
  );
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
};
