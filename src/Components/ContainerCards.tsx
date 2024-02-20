/* import { useState} from "react";
import { Pagination } from "./Pagination";
import { ApiMovies } from "./ApiMovies";

interface ConteinerCardsProps {
  newSortBy: string;
  newFilterBy: number;
}

  export const ConteinerCards = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
   const [newSortBy, setNewSortBy] = useState<string>('');
    const [newFilterBy, setNewFilterBy] = useState<number>(12)
    const [movies, totalPages] = ApiMovies(currentPage, newSortBy, newFilterBy);

    

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
            </dl>
          </a>
        </li>
      ))}
      <Pagination
      currentPage ={currentPage}
      setCurrentPage={setCurrentPage}
      totalPages={totalPages as number}
      ></Pagination>
    </>
  );
}; */

/*

import { useState } from "react";
import { Pagination } from "./Pagination";
import { ApiMovies } from "./ApiMovies";
import { GenreList } from "./GenreList";


export const ConteinerCards = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [genre] = GenreList();
  const [filterBy, setFilterBy] = useState<string>("");

  const sortData = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const optionValue = e.target.value;
   /* let newSortBy = "";

    if (optionValue === "asc") {
      newSortBy = "primary_release_date.asc";
    } else if (optionValue === "desc") {
      newSortBy = "primary_release_date.desc";
    } 

    setSortBy(optionValue);
  };

  const filterData = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const optionValue = e.target.value;

    setFilterBy(optionValue);
  };

  const [movies, totalPages] = ApiMovies(currentPage, sortBy, filterBy);

  return (
    <>
      {movies.map((movie) => (
        <li key={movie.id} data-id={movie.genre_ids} className="liClass">
          <a href="#" className="card-link">
            <dl className="user-name">
              <figure>
                <img
                  className="imgLi"
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                />
              </figure>
              <dt>{movie.original_title}</dt>
              <dd>{movie.release_date}</dd>
            </dl>
          </a>
        </li>
      ))}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages as number}
      />

      <div className="sideBarFiltros">
        <select
          data-testid="select-filter"
          name="channel"
          id="channel"
          onChange={filterData}
          value={filterBy}
        > <option value="Todos">Filter by Genre</option>
        {
          genre.map((genres) => (
            <option key={genres.id} value={genres.id}className="optionClass">{genres.name}</option>
          ))
        }
        </select>

        <select
          data-testid="select-sort"
          name="sort"
          id="sort"
          onChange={sortData}
          value={sortBy}
        >
          <option value="">Order by</option>
          <option value="primary_release_date.asc">Primary Release Date Asc</option>
          <option value="primary_release_date.desc">Primary Release Date Desc</option>
        </select>
      </div>
    </>
  );
}; */

import React from 'react';
import {GetMovies } from '../DataMovies/GetMovies';

interface ContainerCardsProps {
  currentPage: number;
  sortBy: string;
  filterBy: number;
}

export const ContainerCards: React.FC<ContainerCardsProps> = ({ currentPage, sortBy, filterBy }) => {
  const [movies, totalPages] = GetMovies(currentPage, sortBy, filterBy);

  return (
    <div className='ulClass'>
      {movies.map((movie) => (
        <li key={movie.id} data-id={movie.genre_ids} className="liClass">
          <a href="#" className="card-link">
            <dl className="user-name">
              <figure>
                <img
                  className="imgLi"
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt={movie.original_title} // Agregado alt
                />
              </figure>
              <dt>{movie.original_title}</dt>
              <dd>{movie.release_date}</dd>
            </dl>
          </a>
        </li>
      ))}
    </div>
  );
};
