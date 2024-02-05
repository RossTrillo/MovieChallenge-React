export const ConteinerFilters = () => {
  return (
    <div className="sideBarFiltros">

        <select data-testid="select-filter" name="channel" id="channel">
          <option value="Todos">Filter by Genre</option>
          <option value="Genre">Action</option>
          <option value="Genre">Adventure</option>
          <option value="Genre">Animation</option>
          <option value="Genre">Comedy</option>
          <option value="Genre">Crime</option>
          <option value="Genre">Documentary</option>
          <option value="Genre">Drama</option>
          <option value="Genre">Family</option>
          <option value="Genre">Fantasy</option>
          <option value="Genre">History</option>
          <option value="Genre">Horror</option>
          <option value="Genre">Music</option>
          <option value="Genre">Mystery</option>
          <option value="Genre">Romance</option>
          <option value="Genre">Science Fiction</option>
          <option value="Genre">Tv Movie</option>
          <option value="Genre">Thriller</option>
          <option value="Genre">War</option>
          <option value="Genre">Western</option>
        </select>
  
        <select data-testid= "select-sort" name="id" id="id" onChange={sortData}>
          <option value="Seleccionar">Order by</option>
          <option value="Asc">Id Asc</option>
          <option value="Desc"> Id Desc</option>
        </select>
    </div>
  )
}

const sortData = (e) => {
 const optionValue = e.target.value
  if (optionValue === "Desc") {
    return alert("Descendente")
  }
  if (optionValue === "Asc")
  return alert("Ascendente")
}
