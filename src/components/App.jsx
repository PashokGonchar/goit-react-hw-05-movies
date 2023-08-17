
import Movies from 'pages/Movies/Movies';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/goit-react-hw-05-movies" element={<Layout />}>
          <Route path="movies" element={<Movies />} />
        </Route>
      </Routes>
    </div>
  );
};
