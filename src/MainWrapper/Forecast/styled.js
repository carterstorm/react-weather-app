import styled from "styled-components";

export const Wrapper = styled.footer`
padding: 20px;
`;

export const Heading = styled.h1`
    font-size: 20px;
    text-transform: uppercase;
    padding: 10px;
    margin: 0;
    border-bottom: 1px solid black;
`;

export const ForecastContainer = styled.section`
    display: flex;
    justify-content: space-around;
`;

export const ForecastItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Time = styled.p`
    font-size: 12px;
`;

export const WeatherImage = styled.img`
    width: 60px;
`;

export const Temperature = styled.p`
    font-weight: 700;
`;