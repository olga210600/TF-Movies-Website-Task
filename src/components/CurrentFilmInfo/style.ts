import styled               from 'styled-components'
import {Link as RouterLink} from "react-router-dom";

export const PageWrapper = styled.div`
  width           : 100%;
  height          : 100%;
  background      : #2b2a2a;
  box-sizing      : border-box;
  font-family     : sans-serif;
  padding-bottom  : 20px;
  justify-content : center;
  margin          : 0;
  min-width       : 670px;
  position        : relative;
`

export const HeaderFilmInfo = styled.div`
  position : relative;
  top      : 170px;
`

export const FilmInfoWrapper = styled.div`
  width           : 600px;
  display         : flex;
  box-sizing      : border-box;
  justify-content : center;
  position        : absolute;
  top             : -190px;
  left            : 50%;
  transform       : translate(-50%, -50%);
`

export const FilmInfo = styled.div`
  height       : 100%;
  width        : 350px;
  color        : white;
  box-sizing   : border-box;
  padding-left : 20px;
`

export const ImageWrapper = styled.div`
  width      : 250px;
  height     : 350px;
  object-fit : contain;
`

export const Image = styled.img`
  width         : 100%;
  height        : 100%;
  border-radius : 5px;
`

export const MovieName = styled.p`
  font-size : 30px;
  margin    : 0 0 10px 10px;
`

export const MovieYear = styled.p`
  font-size: 18px;
  margin: 10px;
`

export const MovieGenre = styled.p`
  font-size : 19px;
  margin    : 10px;
`

export const MovieDirected = styled.p`
  font-size : 19px;
  margin    : 10px;
`

export const MovieDescription = styled.p`
  font-size   : 17px;
  color       : #8c8686;
  width       : 600px;
  margin      : 200px auto 0;
  text-align  : justify;
  text-indent : 20px;
  font-family : sans-serif;
  line-height : 25px;

  @media (min-device-width: 320px) and (max-device-width: 568px) {
    font-size   : 27px;
    line-height : 45px;
  }
`

export const MovieVideo = styled.div`
  width           : 100%;
  display         : flex;
  justify-content : center;
  align-items     : center;
  margin          : 30px 0 50px 0;
`

export const ButtonsWrapper = styled.div`
  display : flex;
`

export const DeleteBtnWrapper = styled.div`
  color           : white;
  width           : 40px;
  height          : 40px;
  border          : none;
  border-radius   : 50%;
  display         : flex;
  justify-content : center;
  align-items     : center;
  margin-right    : 10px;
  margin-top      : 2px;
`

export const Link = styled(RouterLink)`
  text-decoration : none;
`

export const BtnWrapper = styled.div`
  width  : 25px;
  height : 25px;
`

export const EditBtnWrapper = styled.div`
  width           : 40px;
  height          : 40px;
  border-radius   : 50%;
  display         : flex;
  justify-content : center;
  align-items     : center;
  margin-right    : 20px;
  margin-left     : 10px;
`

export const UserBtnWrapper = styled.div`
  width       : 300px;
  margin-left : 10px;
  display     : flex;
`

export const LikeBtn = styled.button`
  width         : 120px;
  height        : 30px;
  background    : #33333e;
  color         : white;
  margin-right  : 12px;
  border-radius : 5px;
  border        : none;
  font-size     : 15px;
  cursor        : pointer;

  :hover {
    background : #5f5e5e;
  }

  :active {
    box-shadow : rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`

export const WatchLateBtn = styled.button`
  width         : 120px;
  height        : 30px;
  background    : #33333e;
  color         : white;
  margin-right  : 12px;
  border-radius : 5px;
  border        : none;
  font-size     : 15px;
  cursor        : pointer;

  :hover {
    background : #5f5e5e;
  }

  :active {
    box-shadow : rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`
