import styled from 'styled-components'

export const Select = styled.select`
  height: 35px;
  border-radius: 6px;
  padding: 0 5px;

  ${({isError}) =>
    isError
        ? `
    border: 2px solid red;
    `
        : `
        border: 2px solid gray;
    `}
`