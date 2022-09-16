import styled                 from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Wrapper = styled.div`
  display   : flex;
  min-width : 670px;
  position  : relative;

  & nav {
    display         : flex;
    margin          : 0;
    justify-content : right;
    width           : 70%;
    height          : 50px;
    align-items     : center;

    @media (min-width: 949px) and (max-width: 1215px) {
      justify-content : center;
    }

    @media (min-width: 670px) and (max-width: 948px) {
      width           : 100%;
      justify-content : center;
    }

    @media (min-device-width: 320px) and (max-device-width: 568px) {
      justify-content : center;
      width           : 100%;
    }
  }
`
export const LogoNameWrapper = styled.div`
  width     : 30%;
  min-width : 330px;
`

export const LogoName = styled(RouterLink)`
  font-family     : 'Teko', Arial, sans-serif;
  font-size       : 50px;
  width           : 327px;
  text-decoration : none;
  color           : white;
  cursor          : pointer;
`

export const Slogan = styled.div`
  font-family    : 'Playfair Display', serif;
  letter-spacing : 3px;
`

export const LinkWrapper = styled.div`
  display     : flex;
  align-items : center;
`

export const SelectWrapper = styled.div`
  display      : flex;
  margin-right : 25px;

  && select {
    margin-left   : 7px;
    border-radius : 5px;
    width         : 150px;
    height        : 30px;
    text-align    : center;
    background    : none;
    color         : white;
    font-size     : 14px;
  }

  && option {
    color      : white;
    background : #1b1b2b;
  }
`

export const RegistrationWrapper = styled.div`
  display     : flex;
  align-items : center;
`

export const LogInOutWrapper = styled.div`
  width : 80px;
`

export const Link = styled(RouterLink)`
  text-decoration: none;

  && {
    border-bottom : ${({isActive}) => (isActive ? "2px solid red" : "none")};
    color         : white;
    margin-right  : 15px;
    padding       : 5px;

    :hover {
      background    : rgba(233, 233, 233, 0.25);
      padding       : 5px;
      border-radius : 5px;
    }

    :active {
      box-shadow : rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
  }
`;

export const LinkLogOut = styled(RouterLink)`
  text-decoration : none;

  && {
    color        : white;
    margin-right : 15px;
    padding      : 5px;

    :hover {
      background    : rgba(233, 233, 233, 0.25);
      padding       : 5px;
      border-radius : 5px;
    }

    :active {
      box-shadow : rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
  }
`;

export const AddBtn = styled.button`
  font-size     : 16px;
  width         : 100px;
  height        : 30px;
  margin-right  : 15px;
  border        : none;
  color         : white;
  border-radius : 5px;
  background    : rgba(233, 233, 233, 0.15);

  :hover {
    color : grey;
  }
`

export const UserFilmWrapper = styled.div`
  color   : white;
  display : flex;
`

export const WatchLateFilmsWrapper = styled.div`
  width      : 140px;
  box-sizing : border-box;
`

export const LikedFilmsWrapper = styled.div`
  width      : 98px;
  box-sizing : border-box;
`

export const ImgWrapper = styled.div`
  width    : 100%;
  height   : 400px;
  position : relative;
  color    : white;
`

export const HeaderImg = styled.img`
  width      : 100%;
  height     : 100%;
  object-fit : cover;
  opacity    : 0.5;
`

export const HeaderWrapper = styled.div`
  position        : absolute;
  top             : 20px;
  display         : flex;
  color           : white;
  width           : 92%;
  justify-content : center;
  align-items     : center;
  margin-left     : 4%;
  margin-right    : 4%;
  left            : -1px;
  flex-wrap       : wrap;

  @media (min-width : 949px) and (max-width : 1215px) {
    width           : 900px;
    top             : 65px;
    justify-content : center;
    margin          : auto;
    align-items     : center;
    text-align      : center;
    left            : 50%;
    transform       : translate(-50%, -50%);
  }

  @media (min-width : 670px) and (max-width : 948px) {
    width           : 600px;
    top             : 65px;
    justify-content : center;
    margin          : auto;
    align-items     : center;
    text-align      : center;
    left            : 50%;
    transform       : translate(-50%, -50%);
  }
`
