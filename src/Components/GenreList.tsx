import { useState, useEffect } from "react";

export interface Genres {
  id: string;
  name: string;
}

export const GenreList = () => { // sortBy como parámetro opcional

  const [genre, setGenre] = useState<Genres[]>([]);

  useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2Y5NmJlNmNlYWI2ZjY5OTVmYTQ0Mzk2MjQ4Yzg1OCIsInN1YiI6IjY1YjAzZjcwMzk3NTYxMDBhZmQwYjgyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6pjObh04WKk2DX5y8DQSRP1-DWk9fVP1beXU2YZgRr0'
        }
      };
      

    let url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        setGenre(response.genres);
      })
      .catch((err) => console.error(err));
  }, []); // Observa el cambio en sortBy

  return [genre];
};
