import React from 'react';
import './MovieList.css'; // Importa tu archivo de estilos CSS personalizado

const MovieList = ({ movies }) => {
  // Ordenar las películas por año de manera ascendente
  const sortedMovies = [...movies].sort((a, b) => {
    return b.Year.localeCompare(a.Year);
  });

  return (
    <ul className="movie-list">
      {sortedMovies.map((movie) => (  
      
        <li key={movie.imdbID} className="movie-item">
          <div className='caja-poster'>
          <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
          </div>
          <div className="movie-details">
            <h2 className="movie-title">{movie.Title}</h2>
            <p className="movie-year">Año: {movie.Year}</p>           
            <p className="movie-type">Tipo: {movie.Type}</p>
          </div>
        </li>
        
      ))}
    </ul>
  );
};

export default MovieList;
