import Movies from 'pages/MoviesDetails/MoviesDetails';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Suspense, lazy } from 'react';
import Cast from './Cast/Cast';
import Review from './Reviews/Reviews';

const Home = lazy(()=> import ('../pages/HomePages/HomePages'))
const MovieDetailsPage = lazy(()=> import('../pages/MoviesDetails/MoviesDetails'))

export const App = () => {
  return (
    <Suspense fallback="">
      <Routes>
        <Route path="/goit-react-hw-05-movies" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route
            path="/goit-react-hw-05-movies/movies/:movieId"
            element={<MovieDetailsPage />}
          >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
