import styled from "styled-components";

export const Wrapper = styled.div`
  background     : #2b2a2a;
  box-sizing     : border-box;
  padding-bottom : 50px;
  min-width      : 670px;
  height         : 100%;

  @media (min-device-width: 320px) and (max-device-width: 568px) {
    height    : 1500px;
   background : blue;
  }
  
  & div {

    & div {
      flex-wrap       : wrap;
      justify-content : center;
    }
  }

  ul {
    display         : flex;
    justify-content : center;
  }
`

export const FilmsWrapper = styled.div`
  width       : 90%;
  max-width   : 1200px;
  margin      : -200px auto 0;
  padding-top : 30px;
`