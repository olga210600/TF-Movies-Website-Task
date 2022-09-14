import React from 'react';
import {IPagination} from "./type";
import {
    PaginationWrapper,
    NavigationButton
} from './style'

const Pagination: React.FC<IPagination> = ({filmsPerPage, totalFilms, paginate, setCurrentPage, currentPage}) => {
    const pageNumber = []
    const nextPage = () => setCurrentPage(prev => prev + 1)
    const prevPage = () => setCurrentPage(prev => prev - 1)

    const getActivePage = (number) => {
        if (currentPage === number) {
            return true
        }
    }

    for (let i = 1; i <= Math.ceil(totalFilms / filmsPerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <PaginationWrapper>
            <NavigationButton disabled={currentPage === 1} onClick={prevPage}>&#60;</NavigationButton>

            <div>
                {
                    pageNumber.map((number, index) => (
                        <NavigationButton key={index} isActive={getActivePage(number)} onClick={() => paginate(number)}>

                            {number}

                        </NavigationButton>
                    ))
                }
            </div>

            <NavigationButton disabled={currentPage === pageNumber.length} onClick={nextPage}>&#62;</NavigationButton>
        </PaginationWrapper>
    );
};

export default Pagination;