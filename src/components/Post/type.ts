import {IMovie} from "../../store/reducers/moviesReducer";

export interface IPost{
    movie:IMovie,
    filmId: string
}