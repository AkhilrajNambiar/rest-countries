import styled from "styled-components";

export const CountryBox = styled.div`
    width: 20%;
    min-width: 250px;
    height: 300px;
    box-shadow: 2px 2px 20px 2px rgba(0, 0, 0, 25%);
    border-radius: 5px;
    margin: 1rem;
    cursor: pointer;
`

export const CountryFlag = styled.div`
    width: 100% !important;
    height: 40%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;


    img {
        width: 100%;
        height: 100%;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
`

export const CountryDetails = styled.div`
    width: 100%;
    height: 60%;
    background-color: ${({theme}) => theme.boxColor};
    padding: 1rem;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    h3 {
        padding-bottom: 1rem;
    }

    div {
        background-color: ${({theme}) => theme.boxColor};
        padding: 0.1rem;
    }

    div span {
        background-color: ${({theme}) => theme.boxColor};
        font-weight: bold;
    }

    h3 {
        background-color: ${({theme}) => theme.boxColor};
    }
`