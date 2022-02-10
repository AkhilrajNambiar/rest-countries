import styled from "styled-components"

export const CountryPageBox = styled.div`
    margin-top: 1.5rem;
    padding: 2rem;

    .go-back {
        text-decoration: none;
        padding: 0.5rem;
        padding-left: 1rem;
        padding-right: 1rem;
        width: fit-content;
        box-shadow: 2px 2px 20px 2px rgb(0,0,0,25%);
        cursor: pointer;
        background-color: ${({theme}) => theme.boxColor};

        i {
            background-color: ${({theme}) => theme.boxColor};
        }
    }

    a {
        text-decoration: none;
        padding: 0.5rem;
        padding-left: 1rem;
        padding-right: 1rem;
        box-shadow: 2px 2px 20px 2px rgb(0,0,0,25%);
    }
`

export const CountryPageFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 2rem;
    flex-wrap: wrap;

    div {
        width: 50%;
        height: 50%;

        @media screen and (max-width: 900px){
            width: 100%;
        }
    }

    div img {
        width: 100%;
        height: 100%;
    }

    .country-name-and-details {
        width: 50%;
        background-color: orange;

        h1 {
            text-align: start;
            padding-left: 1.25rem;
            padding-right: 1.25rem;

            @media screen and (max-width: 900px) {
                padding-top: 2rem;
            }   
        }

        @media screen and (max-width: 900px) {
            width: 100%;
        }

        .country-details {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-evenly;

            @media screen and (max-width: 900px) {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: space-evenly;
            }
        }
    }
`

export const CountryDetailLeft = styled.div`
    padding: 1rem;

    span {
        font-weight: bold;
    }

    div {
        padding: 0.25rem;
        width: 100%;
    }
`

export const CountryDetailRight = styled.div`
    padding: 1rem;

    span {
        font-weight: bold;
    }

    div {
        padding: 0.25rem;
        width: 100%;
    }
`

export const NeighbouringCountries = styled.div`
    padding: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100% !important;

    div {
        width: fit-content;
        font-weight: bold;
        font-size: 20px;
    }

    .border-countries-list {
        display: flex;
        align-items: center;
        justify-content: start;
        flex-wrap: wrap;
        list-style: none;
        margin-left: 8px;

        li {
            padding: 0.5rem;
            padding-left: 0;
            margin-right: 0.25rem;
            margin-top: 0.25rem;
            margin-bottom: 0.25rem;
            background-color: transparent;
            box-shadow: none;


            a {
                background-color: ${({theme}) => theme.boxColor};
                border: none;
                padding: 0.5rem;
                box-shadow: none;
                border: 1px solid;
                border-color: ${({theme}) => theme.color};
                border-radius: 1.5rem;
            }
        }

        @media screen and (max-width: 700px){
            margin-left: 0;
        }
    }

    @media screen and (max-width: 700px){
            flex-direction: column;
            align-items: flex-start;
        }
`