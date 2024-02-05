interface PaginationProps {
    moviesPerPage: number;
    totalMovies: number;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

export const Pagination = ({
    moviesPerPage,
    totalMovies,
    currentPage,
    setCurrentPage,
}: PaginationProps) => { 
    const pageNumbers = [];

    console.log(Math.ceil(20 / moviesPerPage));

    for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
        pageNumbers.push(i);
    }

    const onSpecificPage = (n: number) => {
        setCurrentPage(n)
    }

    const previusPage = () =>{
        setCurrentPage(currentPage-1)
    }

    const nextPage = () =>{
        setCurrentPage(currentPage +1)
    }
    return (
        <nav className="pagination">
            <ul className="conteinerPagination">
                <a className="backButton" onClick={previusPage}>Anterior</a>
                {pageNumbers.map((noPage) => (
                    <li key={noPage}>
                        <a className={`pagination-link ${noPage === currentPage ? 'is-current': ''}`}
                        onClick={() => onSpecificPage(noPage)}>{noPage}</a>
                    </li>
                ))}
                <a className="nextButton" onClick={nextPage}>Siguiente</a>
            </ul>
        </nav>
    );
};
