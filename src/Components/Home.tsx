import { useState } from 'react';
//import './App.css';
import { ContainerCards } from './ContainerCards';
import { ContainerFilters } from './ContainerFilters';
import { Pagination } from './Pagination';
import { Header } from './Header';
import { Footer} from './Footer';

function Home() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [filterBy, setFilterBy] = useState<string>(""); 

  return (
    <>
    <Header></Header>
      <main>
        <ContainerFilters setSortBy={setSortBy} setFilterBy={setFilterBy} />
        <ContainerCards currentPage={currentPage} sortBy={sortBy} filterBy={filterBy} />
        <Pagination totalPages = {0} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </main>
     <Footer></Footer>
    </>
  );
}

export default Home;