import { getTrending } from 'api';
import Movies from '../../components/Movies/Movies';
import { useState, useEffect } from 'react';

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
      <ul>{movies.length !== 0 && <Movies movies={movies} />}</ul>
    </main>
  );
}
