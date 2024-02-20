import pelicula from "../assets/pelicula.png";


export const Header = () => {
  return (
    <header>
      <img src={pelicula} className="imgCine" alt="Cinemania" />
      <p className="titule">CINEMANÍA</p>
    </header>
  );
};
