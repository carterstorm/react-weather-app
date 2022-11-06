import styled from "styled-components";

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
    justify-content: space-around;
    list-style: none;
    padding: 0;
`;

export const CitiesItem = styled.li`
    padding: 5px 10px;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const TemperatureButtons = styled.div`
    display: flex;
    align-items: center;
`;