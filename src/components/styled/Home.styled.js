import styled from "styled-components";

export const HomeFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px;
`

export const SearchBarAndFilter = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;    
    width: 100%;
    flex-wrap: wrap;
`

export const AllCountriesBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 2rem;

    a {
        text-decoration: none;
    }
`

export const SearchBar = styled.div`
    box-shadow: 2px 2px 20px 2px rgba(0, 0, 0, 25%);
    padding: 1rem;
    background-color: ${({theme}) => theme.boxColor};
    border-radius: 0.5rem;
    padding-right: 5rem;
    margin-top: 10px;

    input {
        border: none;
        background-color: ${({theme}) => theme.boxColor};
        outline: none;
    }

    input::placeholder {
        color: ${({theme}) => theme.color};
        opacity: 1;
    }

    i {
        background-color: ${({theme}) => theme.boxColor};
        padding-right: 1rem;
    }
`

export const FilterBox = styled.div`
    position: relative;
    background-color: transparent;
    min-width: 150px;
    margin-top: 10px;
`

export const Filters = styled.div`
    box-shadow: 2px 2px 20px 2px rgba(0, 0, 0, 25%);
    background-color: ${({theme}) => theme.boxColor};
    padding: 1rem;
    border-radius: 0.25rem;
    text-align: center;
    cursor: pointer;

    i {
        background-color: ${({theme}) => theme.boxColor};
        padding-left: 1rem;
        cursor: pointer;
    }
`

export const ContinentList = styled.ul`
    position: absolute;
    list-style: none;
    left: 0;
    width: 100%;
    top: 60px;
    background-color: red;
    box-shadow: 2px 10px 20px 2px rgba(0, 0, 0, 25%);
    
    li {
        padding: 0.5rem 1rem;
        background-color: ${({theme}) => theme.boxColor};
        cursor: pointer;
    }

    li:hover {
        background-color: ${({theme}) => theme.hoverColor};
    }
`