import styled, { css } from "styled-components";

export const MainWrapper = styled.main`
    max-width: 800px;
    width: 100%;
    height: 100vh;
`;

export const Header = styled.header`
    padding: 0 20px;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const TemperatureButtons = styled.div`
    display: flex;
    align-items: center;
`;

export const CityButton = styled.button`
    position: relative;
    padding: 0;
    width: 25px;
    height: 25px;
    border: none;
    border-radius: 50%;
    background-color: #ececec;
    cursor: pointer;
    transition: .2s;

    ${({ add }) => add && css`

            position: absolute;
            right: 15px;
            top: 5px;
            z-index: 1;
            width: 20px;
            height: 20px;

        &:hover {
            background-color: green;
            color: white;
        }
    `}

    ${({ remove }) => remove && css`
        &:hover {
            background-color: crimson;
            color: white;
        }
    `}
`