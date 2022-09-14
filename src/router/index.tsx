// @ts-nocheck
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "../pages/MainPage";
import FilmPage from "../pages/FilmPage";
import RegistrationPage from "../pages/RegistrationPage";
import LikedFilmPage from "../pages/LikedFilmPage";
import WatchLateFilmPage from "../pages/WatchLateFilmPage";
import {mockedOptions} from "../suggestions";

const mockedData = {
    genres: 'unselected'
};

const withNavigation = (Component, data = {}, options = {}) => {
    return (
        <>
            <Component data={data} options={options}/>
        </>
    );
};

const PublicRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={withNavigation(MainPage, mockedData, mockedOptions)}/>
                <Route path="/movie-details" element={withNavigation(FilmPage)}/>
                <Route path="/registration-form" element={withNavigation(RegistrationPage, mockedData, mockedOptions)}/>
                <Route path="/liked-movies" element={withNavigation(LikedFilmPage)}/>
                <Route path="/watch-late-movies" element={withNavigation(WatchLateFilmPage)}/>
            </Routes>
        </BrowserRouter>
    );
};

export default PublicRoutes;