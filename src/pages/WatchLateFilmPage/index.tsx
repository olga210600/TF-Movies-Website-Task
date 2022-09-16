import React          from 'react';
import {useSelector}  from "react-redux";
import {IMovie}       from "../../store/reducers/moviesReducer";
import FilmsRendering from "../../components/FilmsRendering";

const WatchLateFilmPage = () => {
    const movies: IMovie[] = useSelector((state: any) => state.moviesList.defaultData);

    const watchLateMovies = movies.reduce((acc: IMovie[], movie: IMovie): IMovie[] => {
        if (movie.isWatchLate) {
            acc.push(movie);
        }
        return acc;
    }, [])

    return (
        <div>
            <FilmsRendering movies={watchLateMovies}/>
        </div>
    );
};

export default WatchLateFilmPage;