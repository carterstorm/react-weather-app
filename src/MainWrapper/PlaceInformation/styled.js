import styled, { css } from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PlaceContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 0;
`;

export const Place = styled.p`
    font-size: 40px;
    margin: 0 20px 0 0;
`;

export const SkyInfo = styled.p`
    font-size: 20px;
    margin: 0;
`;

export const WeatherInformation = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;
`;

export const WeatherImage = styled.img`
    width: 100px;
    height: 100px;
`;

export const WeatherTemperature = styled.p`
    font-size: 40px;
`;

export const AddButton = styled.button`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(100%, -50%);
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    background-color: #ececec;
    cursor: pointer;
    transition: .2s;
    font-size: 20px;

    ${({ showValue }) => showValue && css`
        display: none;
    `}

    &:hover {
        background-color: green;
        color: white;
    }
`;