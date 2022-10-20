import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Place = styled.p`
    font-size: 40px;
`;

export const WeatherInformation = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;
`;

export const WeatherImage = styled.div`
    width: 100px;
    height: 100px;
    background-color: black;
    border-radius: 50%;
`;

export const TemperatureElement = styled.p`
    font-size: 40px;
`;
