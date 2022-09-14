import React, { useEffect, useState }         from "react";
import { useDispatch, useSelector }           from 'react-redux';
import { IMovie, addNewMovie, selectedFilms } from "../../store/reducers/moviesReducer";
import PageHeader                             from "../../components/PageHeader";
import Posts                                  from "../../components/Posts";
import ModalWindow                            from "../../components/ModalWindow";
import { IMainPage }                          from "./type";
import Pagination                             from "../../components/Pagination";
import {
    Wrapper,
    HeaderWrapper,
    FilmsWrapper,
    HeaderLink, Message,
}                                             from './style';

const MainPage: React.FC<IMainPage> = ({
      options
}) => {
    const [addModalActive, setAddModalActive] = useState(false);
    const [currentPage, setCurrentPage]       = useState(1);
    const [filmsPerPage]                      = useState(12);

    const movies: IMovie[]       = useSelector((state: any) => state.moviesList.defaultData);
    const filteredList: IMovie[] = useSelector((state: any) => state.moviesList.filteredMovies);

    const lastFilmIndex  = currentPage * filmsPerPage;
    const firstFilmIndex = lastFilmIndex - filmsPerPage;
    const currentFilms   = filteredList.slice(firstFilmIndex, lastFilmIndex);

    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    const handleCategoryChange = (event) => {
        dispatch(selectedFilms(event.target.value));
    }

    const currentFunction = (values) => {
        dispatch(addNewMovie(values));
    }

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <Wrapper>
            <HeaderWrapper>
                <HeaderLink>
                    <PageHeader setAddModalActive={setAddModalActive} handleCategoryChange={handleCategoryChange}/>

                    {
                        addModalActive &&
                        <ModalWindow
                            options={options}
                            currentButton='Add'
                            currentFunction={currentFunction}
                            date={movies}
                            handleClose={() => setAddModalActive(false)}
                        />
                    }
                </HeaderLink>
            </HeaderWrapper>

            <FilmsWrapper>
                {
                    filteredList.length ?
                        <div>
                            <Posts films={currentFilms}/>

                            <Pagination
                                filmsPerPage={filmsPerPage}
                                totalFilms={filteredList.length}
                                paginate={paginate}
                                setCurrentPage={setCurrentPage}
                                currentPage={currentPage}
                            />
                        </div>
                        :

                        <Message>No movies in this category</Message>
                }
            </FilmsWrapper>
        </Wrapper>
    );
};

export default MainPage;