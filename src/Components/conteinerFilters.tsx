import React, { useState } from "react";
import { GenreList } from "./GenreList";


export const ConteinerFilters = () => {
  const [sortBy, setSortBy] = useState<string>("");
  const [genre] = GenreList();
  const [filterBy]=useState<string>("");


  const sortData = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const optionValue = e.target.value;
    let newSortBy = "primary_release_date.asc";

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

    console.log("filter by", newFilterBy)
  }


  return (
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
  );
}; 
