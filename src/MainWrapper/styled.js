import styled, { css } from "styled-components";

export const MainWrapper = styled.main`
    max-width: 800px;
    width: 100%;
    height: 100vh;
`;

export const Header = styled.header`
    padding: 0 20px;
`;

export const CitiesList = styled.ul`
    display: flex;
    justify-content: flex-start;
    list-style: none;
    padding: 0;
`;

export const CityItem = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 150px;
    width: 100%;
    padding: 5px 10px;
`;

export const CityText = styled.p`
    margin: 0;
`;


export const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const TemperatureButtons = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledLocationSearch = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
`;

export const ContainerSearch = styled.div`
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    flex-direction: row;
    max-width: 400px;
    width: 100%;
`;

export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding-left: 10px;
    background-color: transparent;
    border: 1px solid black;
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

export const DeleteSpan = styled.span`
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%,-25%);
`;