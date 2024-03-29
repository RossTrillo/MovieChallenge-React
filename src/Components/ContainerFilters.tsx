/* import React, { useState } from "react";
import { GenreList } from "./GenreList";



export const ConteinerFilters = () => {
  const [sortBy, setSortBy] = useState<string>("");
  const [genre] = GenreList();
  const [filterBy, setFilterBy]=useState<string>("");


  const sortData = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const optionValue = e.target.value;
    let newSortBy = "";

    if (optionValue === "asc") {
      newSortBy = "primary_release_date.asc";
    } else if (optionValue === "desc") {
      newSortBy = "primary_release_date.desc";
    } 
    console.log("order", newSortBy)

    setSortBy(newSortBy); 
  };

  const  filterData = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const optionValue = e.target.value;
    let newFilterBy = "";

    if(optionValue === "28") {
      newFilterBy="28"
    }

    console.log("filter by", newFilterBy);

    setFilterBy(newFilterBy)
  }


  return (
    <div>
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
        <option value="asc">Primary Release Date Asc</option>
        <option value="desc">Primary Release Date Desc</option>
      </select>
    </div>

    </div>
  );
}; */

import React from 'react';
import { GetGenres } from '../DataMovies/GetGenres';

interface ContainerFiltersProps {
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  setFilterBy: React.Dispatch<React.SetStateAction<string>>;
}

export const ContainerFilters: React.FC<ContainerFiltersProps> = ({ setSortBy, setFilterBy }) => {
  const [genre] = GetGenres();
  const sortData = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const optionValue = e.target.value;
    setSortBy(optionValue);
  };

  const filterData = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const optionValue =e.target.value; // Parse a int
    setFilterBy(optionValue);
  };

  return (
    <div className="sideBarFiltros">
      <select
        data-testid="select-filter"
        name="channel"
        id="channel"
        onChange={filterData}
      >
        <option value={""}>Filter by Genre</option>
        {genre.map((genres) => (
          <option key={genres.id} value={genres.id} className="optionClass">{genres.name}</option>
        ))}
      </select>
      <select
        data-testid="select-sort"
        name="sort"
        id="sort"
        onChange={sortData}
      >
        <option value="">Order by</option>
        <option value="primary_release_date.asc">Primary Release Date Asc</option>
        <option value="primary_release_date.desc">Primary Release Date Desc</option>
      </select>
    </div>
  );
};
