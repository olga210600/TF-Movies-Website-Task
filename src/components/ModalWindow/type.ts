import {IMovie} from "../../store/reducers/moviesReducer";
import {IOptions} from "../../suggestions";

export interface IModalWindow {
    date: IMovie[];
    options: IOptions;
    currentFunction: any;
    currentButton: string;
    handleClose: any;
}