import React from 'react';
import {useSelector} from "react-redux";
import FilmsRendering from "../../components/FilmsRendering";
import {IMovie} from "../../store/reducers/moviesReducer";


const LikedFilmPage = () => {
    const movies: IMovie[] = useSelector((state: any) => state.moviesList.filteredMovies);

    console.log("movies liked" ,movies)
    const likedMovies = movies.reduce((acc: IMovie[], movie: IMovie): IMovie[] => {
        if (movie.isLiked) {
            acc.push(movie);
        }

        return acc
    }, [])

    return (
        <div>
            <FilmsRendering movies={likedMovies}/>
        </div>
    );
};

export default LikedFilmPage;