// @ts-nocheck
import React                      from "react";
import {useDispatch, useSelector} from "react-redux";
import {IMovie}                   from "../../store/reducers/moviesReducer";
import {logOut}                   from '../../store/reducers/moviesReducer';
import {createBrowserHistory}     from "history";
import {mockedOptions}            from "../../suggestions";
import HeaderImgPost              from "../../assets/galaxy-stars-space-24-4k.jpg";
import { INavigation }            from "./type";
import {
    Wrapper,
    Link,
    HeaderWrapper,
    HeaderImg,
    LogoNameWrapper,
    AddBtn,
    LinkWrapper,
    SelectWrapper,
    ImgWrapper,
    LikedFilmsWrapper,
    LogInOutWrapper,
    RegistrationWrapper,
    UserFilmWrapper,
    WatchLateFilmsWrapper,
    LogoName,
    LinkLogOut
}                                 from './style';

export const PATHS = {
    MAIN                  : "/",
    REGISTRATION_FORM     : "/registration-form",
    LIKED_MOVIE_PAGE      : '/liked-movies',
    WATCH_LATE_MOVIE_PAGE : '/watch-late-movies'
};

const Navigation: React.FC<INavigation> = ({
    setAddModalActive,
    handleCategoryChange,
}) => {
    const movies: IMovie[] = useSelector((state: any) => state.moviesList.defaultData);
    const isUser: boolean  = useSelector((state: any) => state.moviesList.isAuthorized);
    const isAdmin: boolean = useSelector((state: any) => state.moviesList.isAdmin);

    const history     = createBrowserHistory();
    const currentPage = history.location.pathname;
    const dispatch    = useDispatch();
    let mainPage

    const likedMovies = movies.reduce((acc: IMovie[], movie: IMovie): IMovie[] => {
        if (movie.isLiked) {
            acc.push(movie);
        }

        return acc;
    }, []);

    const watchedLateMovies = movies.reduce((acc: IMovie[], movie: IMovie): IMovie[] => {
        if (movie.isWatchLate) {
            acc.push(movie);
        }

        return acc
    }, []);

    if (currentPage === PATHS.MAIN) {
        mainPage = true
    } else {
        mainPage = false;;
    }

    return (
        <Wrapper>
            <ImgWrapper>
                <HeaderImg src={HeaderImgPost}/>
            </ImgWrapper>

            <HeaderWrapper>
                <LogoNameWrapper>
                    <LogoName isActive={currentPage === PATHS.MAIN} to={PATHS.MAIN}>
                        GalacticFilms
                    </LogoName>
                </LogoNameWrapper>

                <nav>
                    <LinkWrapper>
                        <Link isActive={currentPage === PATHS.MAIN} to={PATHS.MAIN}>
                            Main page
                        </Link>

                        <SelectWrapper>
                            <select
                                name="category-list"
                                id="category-list"
                                onChange={handleCategoryChange}
                            >
                                <option value="">All genres of films</option>

                                {mockedOptions.map((option, index) => (
                                    <option key={index} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </SelectWrapper>
                    </LinkWrapper>

                    <div>
                        {
                            isUser &&
                            <UserFilmWrapper>
                                {!!likedMovies.length && (

                                    <LikedFilmsWrapper>
                                        <Link isActive={currentPage === PATHS.LIKED_MOVIE_PAGE}
                                              to={PATHS.LIKED_MOVIE_PAGE}>
                                            Liked Film
                                        </Link>
                                    </LikedFilmsWrapper>
                                )}

                                {!!watchedLateMovies.length && (

                                    <WatchLateFilmsWrapper>
                                        <Link isActive={currentPage === PATHS.WATCH_LATE_MOVIE_PAGE}
                                              to={PATHS.WATCH_LATE_MOVIE_PAGE}>
                                            Watch Late Film
                                        </Link>
                                    </WatchLateFilmsWrapper>
                                )}
                            </UserFilmWrapper>
                        }
                    </div>

                    <RegistrationWrapper>

                        {
                            isAdmin && mainPage &&
                            <AddBtn
                                isActive={currentPage === '/movie-details'}
                                onClick={() => {
                                    setAddModalActive(true)
                                }}
                            >
                                Add Film
                            </AddBtn>
                        }

                        {!isAdmin && !isUser ?
                            <LogInOutWrapper>
                                <Link
                                    isActive={currentPage === PATHS.REGISTRATION_FORM}
                                    to={PATHS.REGISTRATION_FORM}
                                >
                                    Log in
                                </Link>
                            </LogInOutWrapper>
                            :
                            <LogInOutWrapper>
                                <LinkLogOut isActive={currentPage === PATHS.MAIN} to={PATHS.MAIN}
                                            onClick={() => dispatch(logOut())}>
                                    Log out
                                </LinkLogOut>
                            </LogInOutWrapper>
                        }
                    </RegistrationWrapper>
                </nav>
            </HeaderWrapper>
        </Wrapper>
    );
};

export default Navigation;
