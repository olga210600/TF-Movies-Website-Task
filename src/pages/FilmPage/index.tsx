import React from 'react';
import {useSelector} from "react-redux";
import {createBrowserHistory} from 'history'
import {IMovie} from "../../store/reducers/moviesReducer";
import CurrentFilmInfo from "../../components/CurrentFilmInfo";

const FilmPage = () => {
    const movies: IMovie[] = useSelector((state: any) => state.moviesList.defaultData)
    const history = createBrowserHistory()
    const params = new URLSearchParams(history.location.search);
    const filmName = params.get("filmId");

    return (
        <div>
            {
                movies.map(movie => {
                        if (movie.id === filmName) {

                            return (
                                <CurrentFilmInfo movie={movie}/>
                            )
                        }

                    }
                )

            }
        </div>
    );
};

export default FilmPage;
