import styled from "styled-components";

export const MainNav = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    padding: 0 20px 0 20px;
    box-shadow: 2px 2px 20px 2px rgba(0, 0, 0, 25%);
    background-color: ${({theme}) => theme.boxColor};

    h1 {
        font-size: 25px;
        background-color: ${({theme}) => theme.boxColor};
    }

    .theme-selector {
        cursor: pointer;

        p {
            background-color: ${({theme}) => theme.boxColor};
            font-size: 18px;
            font-weight: bold;
        }

        i {
            background-color: ${({theme}) => theme.boxColor};
        }
    }
`