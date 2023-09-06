import axios from 'axios';

export async function fetchMovies(query) {
  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${query}&apikey=aa7dead`
    );

    if (response.data.Search) {
      const moviesWithPosters = await Promise.all(
        response.data.Search.map(async (movie) => {
          return {
            ...movie,
            Poster: `http://img.omdbapi.com/?apikey=aa7dead&i=${movie.imdbID}`,
          };
        })
      );

      return moviesWithPosters;
    } else {
      return [];
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
