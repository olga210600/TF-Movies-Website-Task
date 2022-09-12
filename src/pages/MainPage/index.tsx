import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import PaginationList from 'react-pagination-list';
import {IMovie, addNewMovie, selectedFilms} from "../../store/reducers/moviesReducer";
import PageHeader from "../../components/PageHeader";
import Post from "../../components/Post";
import ModalWindow from "../../components/ModalWindow";
import {IMainPage} from "./type";
import {
    Wrapper,
    HeaderWrapper,
    FilmsWrapper,
    HeaderLink,
    Message
} from './style';

const MainPage: React.FC<IMainPage> = ({options}) => {
    const [addModalActive, setAddModalActive] = useState(false)
    const movies: IMovie[] = useSelector((state: any) => state.moviesList.defaultData);
    const filteredList: IMovie[] = useSelector((state: any) => state.moviesList.filteredMovies);
    const dispatch = useDispatch();

    const handleCategoryChange = (event) => {
        dispatch(selectedFilms(event.target.value));
    }

    const currentFunction = (values) => {
        dispatch(addNewMovie(values));
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
                {
                    filteredList.length ?
                        <PaginationList
                            data={filteredList}
                            pageSize={8}
                            layout={"row"}
                            renderItem={(item, index) => (
                                <Post filmId={item.id} key={index} movie={item}/>
                            )}
                        />
                        :
                        <Message>No movies in this category</Message>
                }

            </FilmsWrapper>

        </Wrapper>
    );
};

export default MainPage;