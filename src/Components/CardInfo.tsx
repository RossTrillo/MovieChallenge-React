import pelicula from "../assets/pelicula.png";
import {UseMovies} from '../hooks/UseMovies';

import { Link } from "react-router-dom";

export const CardInfo = () => {
  return (
    <>
    <div className='sideBarHome'>
    <Link to='/'><button className='homeButton'>Home</button></Link>
    </div>
    <figure>
    <img src={pelicula} className="imgCine" alt="Cinemania" />
    </figure>
    </>
  )
}
