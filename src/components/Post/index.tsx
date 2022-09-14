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
    WatchLateBtnWrapper,
    Wrapper
} from './style'

const Post: React.FC<IPost> = ({films}) => {
    const isAdmin: boolean = useSelector((state: any) => state.moviesList.isAdmin)
    const isAuthorized: boolean = useSelector((state: any) => state.moviesList.isAuthorized)
    const dispatch = useDispatch()

    return (

            <Wrapper>
            {
                films.map((film) => (


                        <PostWrapper>

                            {isAdmin &&
                                <CloseBtn onClick={() => dispatch(removeMovie(film.id))}>&#10006;</CloseBtn>
                            }

                            <Link to={{pathname: `/movie-details?filmId=${film.id}`}}>
                                <MovieImgWrapper>

                                    <MovieImg alt={film.name} title={film.name} src={film.image}/>
                                </MovieImgWrapper>

                                <MovieName>{film.name}</MovieName>
                            </Link>

                            {isAuthorized &&
                            <ButtonsWrapper>
                                <LikedBtnWrapper
                                    onClick={() => dispatch(likedFilm(film.id))}>{film.isLiked ? 'Liked' : 'Like'}
                                </LikedBtnWrapper>

                                <WatchLateBtnWrapper
                                    onClick={() => dispatch(watchLateFilm(film.id))}>{film.isWatchLate ? 'Watched late' : 'Watch late'}
                                </WatchLateBtnWrapper>
                            </ButtonsWrapper>

                            }

                        </PostWrapper>
                    )
                )
            }
            </Wrapper>
    );
};

export default Post;

// import React from 'react';
// import {Link, MovieImg, MovieImgWrapper, MovieName, PostWrapper} from "../Post/style";
//
// const Post = ({films, }) => {
//     return (
//         <div>
//             {
//                 films.map((film) => (
//                         <Link to={{pathname: `/movie-details?filmId=${film.id}`}}>
//                             <MovieImgWrapper>
//
//                                 <MovieImg  alt={film.name} title={film.name} src={film.image}/>
//                             </MovieImgWrapper>
//
//                             <MovieName>{film.name}</MovieName>
//                         </Link>
//                     )
//                 )
//             }
//         </div>
//     );
// };
//
// export default Post;