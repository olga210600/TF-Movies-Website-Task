import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeMovie, likedFilm, watchLateFilm} from '../../store/reducers/moviesReducer';
import {IPost} from "./type";
import {
    PostWrapper,
    CloseBtn,
    ButtonsWrapper,
    MovieName,
    Link,
    LikedBtnWrapper,
    MovieImg,
    MovieImgWrapper,
    WatchLateBtnWrapper
} from './style'

const Post:React.FC<IPost> = ({movie, filmId}) => {
    const isAdmin: boolean = useSelector((state: any) => state.moviesList.isAdmin)
    const isAuthorized: boolean = useSelector((state: any) => state.moviesList.isAuthorized)
    const dispatch = useDispatch()

    return (
        <div>
            <PostWrapper>

                {isAdmin &&
                <CloseBtn onClick={() => dispatch(removeMovie(movie.id))}>&#10006;</CloseBtn>
                }

                <Link to={{pathname: `/movie-details?filmId=${filmId}`}}>
                    <MovieImgWrapper>
                        <MovieImg  alt={movie.name} title={movie.name} src={movie.image}/>
                    </MovieImgWrapper>

                    <MovieName>{movie.name}</MovieName>
                </Link>

                {isAuthorized &&
                <ButtonsWrapper>
                    <LikedBtnWrapper
                        onClick={() => dispatch(likedFilm(movie.id))}>{movie.isLiked ? 'Liked' : 'Like'}
                    </LikedBtnWrapper>

                    <WatchLateBtnWrapper
                        onClick={() => dispatch(watchLateFilm(movie.id))}>{movie.isWatchLate ? 'Watched late' : 'Watch late'}
                    </WatchLateBtnWrapper>
                </ButtonsWrapper>

                }
            </PostWrapper>
        </div>
    );
};

export default Post;