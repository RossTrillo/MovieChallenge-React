import { useState} from "react";
import { Pagination } from "./Pagination";
import { ApiMovies } from "./ApiMovies";

  export const ConteinerCards = () => {
    const movies = ApiMovies()

    const totalMovies = movies.length
    const [moviesPerPage] = useState<number>(6);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const lastIndex = currentPage * moviesPerPage
    const firstIndex = lastIndex - moviesPerPage
  return (
    <>
      {movies.map((movie) => (
        <li key={movie.id} data-id={movie.genre_ids} className="liClass">
          <a href="#" className="card-link">
            <dl className="user-name">
              <figure>
                <img className="imgLi" src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}/>
              </figure>
              <dt>{movie.original_title}</dt>
              <dd>{movie.release_date}</dd>
              <dd>{movie.id}</dd>
            </dl>
          </a>
        </li>
      )).slice(firstIndex, lastIndex)}
      <Pagination
      moviesPerPage={moviesPerPage}
      currentPage ={currentPage}
      setCurrentPage={setCurrentPage}
      totalMovies={totalMovies}
      ></Pagination>
    </>
  );
};

