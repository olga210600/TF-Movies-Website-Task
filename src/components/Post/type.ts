import {IMovie} from "../../store/reducers/moviesReducer";

export interface IPost {
    films: IMovie[];
    addModalActive?: boolean;
}