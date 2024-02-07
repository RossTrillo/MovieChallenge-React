import { useState} from "react";
import { Pagination } from "./Pagination";
import { ApiMovies } from "./ApiMovies";

  export const ConteinerCards = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [movies, totalPages] = ApiMovies(currentPage)


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
      ))}
      <Pagination
      currentPage ={currentPage}
      setCurrentPage={setCurrentPage}
      totalPages={totalPages}
      ></Pagination>
    </>
  );
};

