import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  background: #2b2a2a;
  width: 100vw;
  height: 100vh;
  color: white;

  & form {
    display: flex;
    align-items: center;
    background: #404040;
    width: 450px;
    height: 405px;
    padding-top: 5px;
    margin-top: 100px;
    flex-direction: column;
    border-radius: 5px;

    @media (min-device-width: 320px) and (max-device-width: 568px) {
      width: 300px;
      height: 330px;
    }
    
    & h2 {
      margin: 0;
    }
  }
`;


export const PageHeader = styled.h1`
    margin:20px 0 50px ;
  font-size: 45px;

  @media (min-device-width: 320px) and (max-device-width: 568px) {
    font-size: 25px;
    margin:20px 0 20px ;
  }
`

export const LabelWrapper = styled.div`
  display: flex;
  position: relative;
`

export const StarPassword = styled.span`
  color: red;
  position: absolute;
  top: -16px;
  left: 75px;
  font-size: 17px;

  @media (min-device-width: 320px) and (max-device-width: 568px) {
    left: 63px;
  }
`

export const StarEmail = styled.span`
  color: red;
  position: absolute;
  top: -16px;
  left: 45px;
  font-size: 17px;


  @media (min-device-width: 320px) and (max-device-width: 568px) {
    left: 32px;
  }
`

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  width: 280px;
  position: relative;

  & label {
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 15px;
    margin-top: -10px;
    
    @media (min-device-width: 320px) and (max-device-width: 568px) {
      margin-left: -10px;
    }
  }

  & input {
    width: 280px;
    height: 35px;
    border-radius: 6px;
    padding: 0 5px;
    margin-bottom: 10px;

    @media (min-device-width: 320px) and (max-device-width: 568px) {
      width: 250px;
      margin-left: -15px;
    }

    ${({ isError }) =>
            isError
                    ? `
    border: 2px solid red;
    `
                    : `
        border: 2px solid lime;
    `}
  }

  @media (min-device-width: 320px) and (max-device-width: 568px) {
    width: 230px;
    height: 70px;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 11px;
  color: red;
  position: absolute;
  top: 64px;

  @media (min-device-width: 320px) and (max-device-width: 568px) {
   left: -10px;
    width: 250px;
  }
`;

export const CompleteWrapper = styled.div`
  margin: 13px 0 10px 0;
  font-size: 17px;
  color: red;
  
  @media (min-device-width: 320px) and (max-device-width: 568px) {
    margin-top: -1px;
  }
`

export const LogInWrapper = styled.div`
  width: 294px;
  display: flex;
  justify-content: right;
  align-items: center;

  @media (min-device-width: 320px) and (max-device-width: 568px) {
    margin-top: -10px;
  }
`

 export const MainPageLinkWrapper = styled.div`
   position: absolute;
   top: 25px;
   height: 30px;
   right: 40px;
   font-size: 18px;
      
   @media (min-device-width: 320px) and (max-device-width: 568px) {
     font-size: 16px;
     right: 10px;
   }
   
`

