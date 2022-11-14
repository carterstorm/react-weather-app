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
    display: flex;
    flex-direction: column;
    max-width: 400px;
    width: 100%;
    position: relative;
`;

export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding-left: 10px;
`;