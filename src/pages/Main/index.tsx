import {useDispatch, useSelector} from 'react-redux';
import {IMovie, addNewMovie} from "../../store/reducers/moviesReducer";
import React, {useState} from "react";
import PaginationList from 'react-pagination-list';
import PageHeader from "../../components/PageHeader";
import {selectedFilms} from '../../store/reducers/moviesReducer'
import Post from "../../components/Post";
import ModalWindow from "../../components/ModalWindow";
// @ts-ignore
import {
    Wrapper,
    HeaderImg,
    HeaderWrapper,
    FilmsWrapper,
    HeaderLink
} from './style'

const Main = ({data, options}) => {
    const movies: IMovie[] = useSelector((state: any) => state.moviesList.defaultData)
    const filteredList: IMovie[] = useSelector((state: any) => state.moviesList.filteredMovies)
    const dispatch = useDispatch()
    const [addModalActive, setAddModalActive] = useState(false)

    const handleCategoryChange = (event) => {
        dispatch(selectedFilms(event.target.value))
    }

    const currentFunction = (values) => {
        dispatch(addNewMovie(values))
    }

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
                            date={movies} handleClose={() => setAddModalActive(false)}
                        />
                    }
                </HeaderLink>

            </HeaderWrapper>

            <FilmsWrapper>
                <PaginationList
                    data={filteredList}
                    pageSize={8}
                    layout={"row"}
                    renderItem={(item, key) => (
                        <Post filmId={item.id} key={key} movie={item}/>
                    )}
                />
            </FilmsWrapper>

        </Wrapper>
    );
};

export default Main;