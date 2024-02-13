import {useState} from 'react'
import pelicula from './assets/pelicula.png'
import './App.css'
import { ConteinerFilters } from './conteinerFilters'
import { ConteinerCards } from './ConteinerCards'

export const Home = () => {
    const [currentPage, setCurrentPage] = useState<string>("")
    const [newSortBy, setNewSortBy] = useState<string>("primary_release_date.asc")


  return (
    <>
    <header>
      <img src={pelicula} className='imgCine'>
      </img>
      <p className='titule'>
        CINEMANÍA
      </p>
    </header>
    <ConteinerFilters currentPage={currentPage} setCurrentPage={setCurrentPage} newSortBy={newSortBy} setNewSortBy ={setNewSortBy}></ConteinerFilters>
    <ul className='ulClass'>
      <ConteinerCards currentPage={currentPage} setCurrentPage={setCurrentPage} newSortBy={newSortBy} setNewSortBy ={setNewSortBy}/>
    </ul>
  <footer>
  <p className='footer'>COPYRIGHT © ROSARIO TRILLO 2023</p>
  </footer>
</>
    )
}
