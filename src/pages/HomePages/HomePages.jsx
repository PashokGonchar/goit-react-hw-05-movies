import { getTrending } from 'api';
import { useState, useEffect } from 'react';
import Home from 'components/Home/Home';

export default function HomePages() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending()
      .then(data => {
        // console.log('Data from getTrending:', data);
        setMovies(data);
      })
      .catch(error => {
        // console.error('Error fetching trending movies:', error);
      });
  }, []);

  // console.log('Movies state:', movies);

  return (
    <main>
      <h1>Trending today</h1>
      <ul>{movies.length !== 0 && <Home movies={movies} />}</ul>
    </main>
  );
}
