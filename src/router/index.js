import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import FilmPage from "../components/FilmPage";
import Registration from "../pages/Registration";
import LikedFilmPage from "../pages/LikedFilmPage";
import WatchLateFilmPage from "../pages/WatchLateFilmPage";

export const mockedOptions =[
    { value: "unselected", label: "Select genre" },
    { value: "actionMovie", label: "action" },
    { value: "adventureMovie", label: "Adventure film" },
    { value: "comedy movie", label: "comedy" },
    { value: "drama", label: "Drama" },
    { value: "fantasy movie", label: "Fantasy movie" },
    { value: "historical movie", label: "Historical movie" },
    { value: "horror movie", label: "Horror movie" },
    { value: "cartoons", label: "Cartoons" },

]

const mockedData = {
    genres: 'unselected'
};


const withNavigation = (Component, data = {}, options = {}) => {
    return (
        <>
            <Component data={data} options={options} />
        </>
    );
};

const PublicRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={withNavigation(Main , mockedData, mockedOptions)} />
                <Route path="/movie-details" element={withNavigation(FilmPage)} />
                <Route path="/registration-form" element={withNavigation(Registration, mockedData, mockedOptions)} />
                <Route path="/liked-movies" element={withNavigation(LikedFilmPage)} />
                <Route path="/watch-late-movies" element={withNavigation(WatchLateFilmPage)} />
            </Routes>
        </BrowserRouter>
    );
};

export default PublicRoutes;