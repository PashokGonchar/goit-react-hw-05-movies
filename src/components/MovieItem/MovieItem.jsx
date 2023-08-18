import { Link, useLocation, useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MovieItem({ title, id }) {
  const [searchParams] = useSearchParams();

  return (
    <li>
      <Link
        to={`/goit-react-hw-05-movies/movies/${id}`}
        state={{
          location: useLocation().pathname,
          search: searchParams.get('query'),
        }}
      >
        {title}
      </Link>
    </li>
  );
}

MovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
