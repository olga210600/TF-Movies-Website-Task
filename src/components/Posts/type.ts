import { IMovie } from "../../store/reducers/moviesReducer";

export interface IPosts {
    films           : IMovie[];
    addModalActive? : boolean;
}