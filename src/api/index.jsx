const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '91fc13fd5c3ba0c44c7bced97914aa3e';

export const getTrending = async () => {

  const response = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);

  if (!response.ok) {
    throw new Error('Smth went wrong');
  }

  const data = await response.json();
   return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error('Smth went wrong');
  }

  return response.json();
};


export const getMovieDetails = async (id) => {
  const response = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error('Smth went wrong');
  }

  const data = await response.json();
   return data;
};

export const getMovieCredits = async (id) => {
  const response = await fetch(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error('Smth went wrong');
  }

  return response.json();
};

export const getMovieReviews = async (id) => {
  const response = await fetch(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error('Smth went wrong');
  }

  return response.json();
};