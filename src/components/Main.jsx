import React, { useState } from "react";
import MovieList from "./MovieList";
import Buscador from "./Buscador";
import { fetchMovies } from "./Api";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    try {
      const moviesWithPosters = await fetchMovies(query);
      setMovies(moviesWithPosters);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <main>
      <div>
        <h1>Buscador de Películas</h1>
      </div>
      <div>
        <Buscador onSearch={handleSearch} />
      </div>
      <MovieList movies={movies} />
    </main>
  );
};

export default Main;
