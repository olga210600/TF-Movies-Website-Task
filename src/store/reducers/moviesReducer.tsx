import {createSlice} from '@reduxjs/toolkit';
import {defaultData} from "../../suggestions";
import cloneDeep from "lodash/cloneDeep";

export interface IMovie {
    id: any;
    image: string;
    name: string;
    year: number;
    genre: string;
    description: string;
    video: any;
    director: string;
    isLiked: boolean,
    isWatchLate: boolean,
    isActiveModalWindow: boolean
}

const moviesSlice = createSlice({
    initialState: {
        defaultData: defaultData,
        filteredMovies: defaultData,
        isAdmin: false,
        isAuthorized: false,
    }
    ,
    name: 'moviesList',
    reducers: {
        selectedFilms(state, action) {
            return {
                ...state,
                filteredMovies: getFilteredList(action.payload, state.defaultData)
            }
        },
        userLogIn(state) {
            return {
                ...state,
                isAuthorized: true
            }
        },
        adminLogIn(state) {
            return {
                ...state,
                isAdmin: true,
            }
        },
        logOut(state) {

            const copiedDefaultData = cloneDeep(state.defaultData)
            const copiedFilteredMovies = cloneDeep(state.filteredMovies)

            const likedDefaultData = copiedDefaultData.map((movie) => {
                movie.isLiked = false;
                movie.isWatchLate = false;
                return movie;
            })

            const likedFilteredMovies = copiedFilteredMovies.map((movie) => {
                movie.isLiked = false;
                movie.isWatchLate = false;

                return movie;
            })
            return {
                ...state,
                isAdmin: false,
                isAuthorized: false,
                userLikedFilm: null,
                defaultData: likedDefaultData,
                filteredMovies: likedFilteredMovies,
            }
        },
        addNewMovie(state, action): any {
            const newFilm = {
                isLiked: false,
                isWatchLate: false,
                ...action.payload
            };

            return {
                ...state,
                defaultData: [...state.defaultData, newFilm],
                filteredMovies: [...state.filteredMovies, newFilm],
            }
        },
        removeMovie(state, action) {
            const clonedDefaultData = state.defaultData.filter(movie => movie.id !== action.payload);
            const clonedFilteredMovies = state.filteredMovies.filter(movie => movie.id !== action.payload);

            return {
                ...state,
                defaultData: clonedDefaultData,
                filteredMovies: clonedFilteredMovies,
            }
        },
        editMovie(state, action): any {

            const clonedStateDefaultData = state.defaultData.map(movie => {
                if (movie.id === action.payload.id) {
                    movie = action.payload;
                    return movie;
                }
                return movie;
            })

            const clonedStateFilteredMovies = state.filteredMovies.map(movie => {
                if (movie.id === action.payload.id) {
                    movie = action.payload;
                    return movie;
                }
                return movie;
            })
            return {
                ...state,
                defaultData: clonedStateDefaultData,
                filteredMovies: clonedStateFilteredMovies
            }
        },
        likedFilm(state, action): any {
            const copiedDefaultData = cloneDeep(state.defaultData);
            const copiedFilteredMovies = cloneDeep(state.filteredMovies);
            const likedDefaultData = copiedDefaultData.map((movie) => {
                if (movie.id === action.payload) {
                    movie.isLiked = !movie.isLiked;
                    return movie;
                }
                return movie;
            })

            const likedFilteredMovies = copiedFilteredMovies.map((movie) => {
                if (movie.id === action.payload) {
                    movie.isLiked = !movie.isLiked;
                    return movie;
                }
                return movie;
            })

            return {
                ...state,
                defaultData: likedDefaultData,
                filteredMovies: likedFilteredMovies,
            }
        },
        watchLateFilm(state, action): any {
            const copiedDefaultData = cloneDeep(state.defaultData);
            const copiedFilteredMovies = cloneDeep(state.filteredMovies);

            const watchLateDefaultData = copiedDefaultData.map((movie) => {
                if (movie.id === action.payload) {

                    movie.isWatchLate = !movie.isWatchLate;

                    return movie;
                }
                return movie;
            })

            const watchLateFilteredMovies = copiedFilteredMovies.map((movie) => {
                if (movie.id === action.payload) {
                    movie.isWatchLate = !movie.isWatchLate;
                    return movie;
                }
                return movie;
            })

            return {
                ...state,
                defaultData: watchLateDefaultData,
                filteredMovies: watchLateFilteredMovies,
            }
        },
    }
})


export function getFilteredList(selectedCategory, movieList) {

    if (!selectedCategory) {
        return movieList;
    }
    return movieList.filter((item) => item.genre === selectedCategory);
}

export const getMovies = (state: { moviesList: IMovie[] }) => state.moviesList;
export const moviesReducer = moviesSlice.reducer;
export const {
    selectedFilms,
    userLogIn,
    adminLogIn,
    logOut,
    addNewMovie,
    removeMovie,
    editMovie,
    likedFilm,
    watchLateFilm
} = moviesSlice.actions

