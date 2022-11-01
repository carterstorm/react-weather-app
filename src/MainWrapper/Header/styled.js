import styled from "styled-components";

export const Wrapper = styled.header`
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

export const LocationSearch = styled.form`
    display: flex;
    align-items: center;
`;

export const SearchInput = styled.input`
    min-width: 400px;
    height: 30px;
    margin-right: 10px;
    padding: 0 10px;
    border-radius: 5px;
    border: 1px solid black;
`;