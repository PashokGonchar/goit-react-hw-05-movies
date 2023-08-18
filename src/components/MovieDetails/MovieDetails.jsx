import { Link, Outlet, useParams } from 'react-router-dom';


export default function MovieDetails() {
  const { movieId } = useParams();
  const NAVIGATION = ['Cast', 'Reviews'];

  return (
    <>
      <ul>
        {NAVIGATION.map((page, index) => {
          return (
            <li key={index}>
              <Link
                to={`/goit-react-hw-05-movies/movies/${movieId}/${page.toLowerCase()}`}
              >
                {page}
              </Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </>
  );
}
