import styled from 'styled-components'

export const PaginationWrapper = styled.div`
  width: 90%;
  height: 50px;
  margin: auto;
  text-align: center;
  display: flex;
`

export const NavigationButton = styled.button`
  height: 30px;
  width: 40px;
  border: none;
  border-radius: 5px;
  background: #7a7a7a;
  color: white;
  font-size: 15px;
  margin: 5px;

  background: ${({isActive}) => (isActive ? "#414141" : "#7a7a7a")};
  border: ${({isActive}) => (isActive ? "solid 3px white" : "none")};

  &:disabled {
    background: #393939;

    :hover {
      background: #393939;
    }

  }

  :hover {
    background: #515050;
    color: white;
  }

  :active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }


`