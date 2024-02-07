{/*interface PaginationProps {
  500: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination = ({
  500,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const pageNumbers = [];

  const maxPageButtons = 5;

  let startPage = 1;

  let endPage = Math.min(500, maxPageButtons);

  if (currentPage >= maxPageButtons) {
    startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
    endPage = Math.min(
      500,
      currentPage + Math.floor(maxPageButtons / 2)
    );
  }

  for (let i = 1; i <= 500; i++) {
    pageNumbers.push(i);
  }

  const onSpecificPage = (n: number) => {
    setCurrentPage(n);
  };

  const previusPage = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(500, prevPage + 1));
  };

  const renderEllipsis =
    currentPage < 500 - 2 && 500 > maxPageButtons;
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

        {startPage > 2 && renderEllipsis && <span>...</span>}

        {pageNumbers.map((noPage) => {
          if (noPage >= startPage && noPage <= endPage) {
            return (
              <li key={noPage}>
                <a
                  className={`pagination-link ${
                    noPage === currentPage ? "is-current" : ""
                  }`}
                  onClick={() => onSpecificPage(noPage)}
                >
                  {noPage}
                </a>
              </li>
            );
          }
        })}
        {endPage <500 && renderEllipsis && <span>...</span>}
        {500 > 1 && (
            <>
          <li key={500-1000}>
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
*/}

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
