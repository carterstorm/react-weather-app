import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Place = styled.p`
    font-size: 40px;
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