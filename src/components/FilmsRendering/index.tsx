import React, {useState} from 'react';
import Navigation from "../../components/RouterNavigation";
import Post from "../../components/Post";
import {IFilmsRendering} from './type';
import Pagination from "../Pagination";
import {
    Wrapper,
    FilmsWrapper
} from './style';


const FilmsRendering: React.FC<IFilmsRendering> = ({movies}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [filmsPerPage] = useState(10)

    const lastFilmIndex = currentPage * filmsPerPage;
    const firstFilmIndex = lastFilmIndex - filmsPerPage;
    const currentFilms = movies.slice(firstFilmIndex, lastFilmIndex)

    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <Wrapper>
            <Navigation/>

            <FilmsWrapper>
                <Post films={currentFilms}/>
            </FilmsWrapper>

            <div>
                <Pagination
                    filmsPerPage={filmsPerPage}
                    totalFilms={movies.length}
                    paginate={paginate}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            </div>

        </Wrapper>
    );
};

export default FilmsRendering;