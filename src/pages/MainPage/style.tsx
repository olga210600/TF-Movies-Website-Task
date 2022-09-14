import styled from 'styled-components'

export const Wrapper = styled.div`
  background     : #2b2a2a;
  box-sizing     : border-box;
  padding-bottom : 50px;
  min-width      : 670px;

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

export const Message = styled.h1`
  width      : 500px;
  height     : 100px;
  color      : white;
  font-size  : 35px;
  margin     : auto;
  text-align : center;
`

export const HeaderWrapper = styled.div`
  height   : 380px;
  position : relative;
  color    : white;
`

export const HeaderLink = styled.div`
  width      : 100%;
  height     : 40px;
  position   : absolute;
  top        : 0;
  box-sizing : border-box;
`

export const FilmsWrapper = styled.div`
  width       : 90%;
  max-width   : 1200px;
  margin      : -200px auto 0;
  padding-top : 50px;
`
