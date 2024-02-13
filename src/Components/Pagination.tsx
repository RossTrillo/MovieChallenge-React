import React from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination = ({
  totalPages,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {

  const maxPageButtons = 5;

  //rango de páginas en paginación dinamicamente 
  const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2)); //asegura que tome a 1 como mínimo
  const endPage = Math.min(500, startPage + maxPageButtons - 1); // asegura que sea 500 como máximo 

  const onSpecificPage = (page: number) => { //actualiza el estado de la página actual
    setCurrentPage(page);
  };

  const previusPage = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1)); // asegura que no sea menor que 1, actualiza el estado de la pagina en -1
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(500, prevPage + 1)); // asegura que no sea mayor de 500, actualiza el estado de la pagina en +1
  };

  return (
    <nav className="pagination">
      <ul className="conteinerPagination">
        <a className="backButton" onClick={previusPage}>
          Anterior
        </a>

        {startPage > 1 && (
          <li key={1}>
            <a className="pagination-link" onClick={() => onSpecificPage(1)}>
              {1}
            </a>
          </li>
        )}

        {startPage > 2 && <span>...</span>}

        {[...Array(endPage - startPage + 1)].map((_, index) => {
          const pageNumber = startPage + index;
          return (
            <li key={pageNumber}>
              <a
                className={`pagination-link ${
                  pageNumber === currentPage ? "is-current" : ""
                }`}
                onClick={() => onSpecificPage(pageNumber)}
              >
                {pageNumber}
              </a>
            </li>
          );
        })}

        {endPage < 500 && (
          <>
            <span className="nextButton">...</span>
            <li key={500}>
              <a
                className={`pagination-link ${
                  500 === currentPage ? "is-current" : ""
                }`}
                onClick={() => onSpecificPage(500)}
              >
                {500}
              </a>
            </li>
          </>
        )}

        <a className="nextButton" onClick={nextPage}>
          Siguiente
        </a>
      </ul>
    </nav>
  );
};
