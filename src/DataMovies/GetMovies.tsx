import { useState, useEffect } from "react";

interface Movie {
  id: string;
  original_title: string;
  release_date: string;
  poster_path: string;
  genre_ids: number;
}

export const GetMovies = (page: number, sortBy: string, filterBy:number) => { // sortBy como parámetro opcional
  console.log("SortBy:", sortBy); 
 console.log("page", page)
 console.log("filter by:" , filterBy)
  const [movies, setMovies] = useState<Movie[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);


  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2Y5NmJlNmNlYWI2ZjY5OTVmYTQ0Mzk2MjQ4Yzg1OCIsInN1YiI6IjY1YjAzZjcwMzk3NTYxMDBhZmQwYjgyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6pjObh04WKk2DX5y8DQSRP1-DWk9fVP1beXU2YZgRr0",
      },
    };

    let url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=${sortBy}&with_genres=${filterBy}`
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.results);
        setTotalPages(response.total_pages);
      })
      .catch((err) => console.error(err));
      console.log(url)
  }, [page, sortBy, filterBy]); // Observa el cambio en sortBy

  return [movies, totalPages];
  
};
