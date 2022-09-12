// @ts-nocheck
import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Navigation, {PATHS} from "../RouterNavigation";
import {
    editMovie,
    likedFilm,
    watchLateFilm,
    removeMovie
} from "../../store/reducers/moviesReducer";
import {mockedOptions} from "../../suggestions";
import ModalWindow from "../ModalWindow";
import deleteImg from '../../assets/delete-svgrepo-com.svg';
import editImg from '../../assets/edit-svgrepo-com.svg';
import {ICurrentFilmInfo} from './type'
import {
    PageWrapper,
    Link,
    EditBtnWrapper,
    MovieDescription,
    MovieDirected,
    MovieGenre,
    MovieYear,
    MovieName,
    ImageWrapper,
    FilmInfoWrapper,
    FilmInfo,
    BtnWrapper,
    ButtonsWrapper,
    DeleteBtnWrapper,
    HeaderFilmInfo,
    Image,
    LikeBtn,
    MovieVideo,
    UserBtnWrapper,
    WatchLateBtn
} from './style';

const CurrentFilmInfo: React.FC<ICurrentFilmInfo> = ({movie}) => {
    const [editModalActive, setEditModalActive] = useState(false);
    const dispatch = useDispatch();
    const isAdmin: boolean = useSelector((state: any) => state.moviesList.isAdmin);
    const isAuthorized: boolean = useSelector((state: any) => state.moviesList.isAuthorized);

    const currentFunction = (values) => {
        dispatch(editMovie(values));
    }

    return (
        <PageWrapper>
            <Navigation/>

            <HeaderFilmInfo>
                <FilmInfoWrapper>
                    <ImageWrapper>
                        <Image src={movie.image}/>
                    </ImageWrapper>

                    <FilmInfo>
                        <MovieName>{movie.name}</MovieName>
                        <MovieYear>Year of release: {movie.year}</MovieYear>
                        <MovieGenre>Genre: {movie.genre}</MovieGenre>
                        <MovieDirected>Directed by: {movie.director}</MovieDirected>

                        {isAuthorized &&
                        <UserBtnWrapper>

                            <LikeBtn
                                onClick={() => dispatch(likedFilm(movie.id))}>{movie.isLiked ? 'Liked' : 'Like'}
                            </LikeBtn>

                            <WatchLateBtn
                                onClick={() => dispatch(watchLateFilm(movie.id))}>{movie.isWatchLate ? 'Watched late' : 'Watch late'}
                            </WatchLateBtn>
                        </UserBtnWrapper>
                        }

                        {isAdmin &&
                        <ButtonsWrapper>
                            <EditBtnWrapper>
                                <BtnWrapper>
                                    <img
                                        src={editImg}
                                        alt='editBtn'
                                        title='editBtn'
                                        onClick={() => setEditModalActive(true)}
                                    />
                                </BtnWrapper>

                            </EditBtnWrapper>

                            <DeleteBtnWrapper>
                                <Link to={PATHS.MAIN} onClick={() => dispatch(removeMovie(movie.id))}>
                                    <img title='delete film' alt='delete film' src={deleteImg}/>
                                </Link>
                            </DeleteBtnWrapper>

                        </ButtonsWrapper>
                        }

                    </FilmInfo>
                </FilmInfoWrapper>
            </HeaderFilmInfo>

            <MovieDescription>{movie.description}</MovieDescription>

            <MovieVideo>
                <iframe
                    width="490"
                    height="320"
                    src={movie.video}
                    frameBorder="0"
                    allowFullScreen>
                </iframe>

            </MovieVideo>

            {
                editModalActive &&
                <ModalWindow
                    options={mockedOptions}
                    currentButton='Edit'
                    currentFunction={currentFunction}
                    date={movie}
                    handleClose={() => setEditModalActive(false)}
                />
            }
        </PageWrapper>
    );
};

export default CurrentFilmInfo;