/* // import {useState} from 'react'
 import pelicula from './assets/pelicula.png'
  import './App.css'
 // import { ConteinerFilters} from './Components/conteinerFilters'
  import { ConteinerCards} from './Components/ConteinerCards'


  function App() {
 // const [currentPage, setCurrentPage] = useState<number>(1);
 // const [newSortBy, setNewSortBy] = useState<string>('');
 // const [mewFilterBy, setNewFilterBy] = useState<number>(1);
    return (
      <>
          <header>
            <img src={pelicula} className='imgCine'>
            </img>
            <p className='titule'>
              CINEMANÍA
            </p>
          </header>
          <ul className='ulClass'>
            <ConteinerCards/>
          </ul>
        <footer>
        <p className='footer'>COPYRIGHT © ROSARIO TRILLO 2023</p>
        </footer>
      </>
    )
  }

  export default App 

 /* import React, {useState} from 'react'
  import {BrowserRouter, Link, Route} from 'react-router-dom'

const Home = () => <h1>Home</h1>
const Details = () => <h1>Details</h1>

export const App = () => {
   const [page, setPage] = useState(() => {
     const {pathname} = window.location
    const page = pathname.slice(1)
     return page
  } )

   const getContent = () => {
      if (page === 'details'){
  return <Details />
       } else  {
        return <Home></Home>
    }}

  const toPage = page => () => {
    //event.preventDefault()
     // window.history.pushState(null, '', `/${page}`)
      setPage(page)
     // console.log(page)
   }
  return (
    <BrowserRouter>
    <header>
      <Link to='/' onClick={toPage('home')} > Home </Link>
      <Link to='/details' onClick={toPage('details')}> Details </Link>
    </header>
    {getContent()}
    </BrowserRouter>
  )
}

export default App */

import React, { useState } from 'react';
import './App.css';
import { ContainerCards } from './Components/ContainerCards';
import { ContainerFilters } from './Components/ContainerFilters';
import { Pagination } from './Components/Pagination';
import { Header } from './Components/Header';
import { Footer} from './Components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [filterBy, setFilterBy] = useState<string>(""); 

  return (
    <>
    <Header></Header>
      <main>
        <ContainerFilters setSortBy={setSortBy} setFilterBy={setFilterBy} />
        <ContainerCards currentPage={currentPage} sortBy={sortBy} filterBy={filterBy} />
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </main>
     <Footer></Footer>
    </>
  );
}

export default App;
