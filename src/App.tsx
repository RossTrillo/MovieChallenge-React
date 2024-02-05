import pelicula from './assets/pelicula.png'
import './App.css'
import { ConteinerFilters} from './Components/conteinerFilters'
import { ConteinerCards} from './Components/ConteinerCards'


function App() {
  return (
    <>
        <header>
          <img src={pelicula} className='imgCine'>
          </img>
          <p className='titule'>
            CINEMANÍA
          </p>
        </header>
        <ConteinerFilters></ConteinerFilters>
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
