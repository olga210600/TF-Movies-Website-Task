import styled               from 'styled-components';
import {Link as RouterLink} from 'react-router-dom';

export const Wrapper = styled.div`
  width     : 90%;
  display   : flex;
  margin    : auto;
  min-width : 550px;
`

export const PostWrapper = styled.div`
  width         : 200px;
  height        : 440px;
  margin        : 20px 20px 0 20px;
  border-radius : 5px;
  position      : relative;
`

export const MovieName = styled.p`
  color           : #b8b6b6;
  height          : 70px;
  width           : 200px;
  font-size       : 16px;
  text-align      : center;
  font-weight     : bold;
  justify-content : center;
  margin-top      : 5px;
  cursor          : pointer;
  line-height     : 1.5;
  margin-bottom   : 15px;
  align-items     : center;
  display         : flex;
`

export const MovieImgWrapper = styled.div`
  width  : 200px;
  height : 300px;
  cursor : pointer;
  margin : auto;
`

export const MovieImg = styled.img`
  width         : 100%;
  height        : 100%;
  object-fit    : cover;
  border-radius : 5px;
  cursor        : pointer;
`

export const CloseBtn = styled.button`
  width         : 35px;
  height        : 35px;
  border-radius : 50%;
  color         : white;
  background    : red;
  font-size     : 15px;
  border        : none;
  position      : absolute;
  left          : 183px;
  top           : -18px;
  cursor        : pointer;

  :hover {
    background : #b30808;
  }
`

export const ButtonsWrapper = styled.div`
  width           : 100%;
  height          : 25px;
  align-items     : center;
  display         : flex;
  font-size       : 13px;
  justify-content : space-between;
`

export const WatchLateBtnWrapper = styled.div`
  width         : 90px;
  height        : 25px;
  display       : flex;
  align-items   : center;
  background    : #33333e;
  text-align    : center;
  border-radius : 5px;
  color         : white;
  cursor        : pointer;

  :hover {
    background : #5f5e5e;
  }

  :active {
    box-shadow : rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }

`

export const LikedBtnWrapper = styled.div`
  width         : 90px;
  height        : 25px;
  display       : flex;
  align-items   : center;
  text-align    : center;
  background    : #33333e;
  color         : white;
  margin-right  : 12px;
  border-radius : 5px;
  cursor        : pointer;

  :hover {
    background : #5f5e5e;
  }

  :active {
    box-shadow : rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`

export const Link = styled(RouterLink)`
  && {
    text-decoration : none;
  }
`;