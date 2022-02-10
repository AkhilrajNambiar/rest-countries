import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyles = createGlobalStyle`

    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Nunito Sans", sans-serif;
    background-color: ${({theme}) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    }
`

export const BadSearch = styled.div`
    width: 100%;
    text-align: center;

    div {
        font-size: 40px;
        color: orange;
        text-align: center;
        font-weight: bold;
    }
`

export default GlobalStyles;