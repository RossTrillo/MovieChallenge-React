import { useEffect, useState } from "react";
import { ApiMovies } from "./ApiMovies";

export const SortingFunction = () => {
  const [sortedMovies, setSortedMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const movies = ApiMovies(); // Obtener las películas desde el hook ApiMovies
    const sortedMoviesById = [...movies].sort((a, b) => parseInt(a.id) - parseInt(b.id));
    setSortedMovies(sortedMoviesById);
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez al montar el componente

  return (
    <div>
      <h2>Sorted Movies by ID</h2>
      <ul>
        {sortedMovies.map((movie) => (
          <li key={movie.id}>
            {movie.original_title} - {movie.id}
          </li>
        ))}
      </ul>
    </div>
  );
};
