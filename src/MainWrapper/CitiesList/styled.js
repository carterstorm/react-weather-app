import styled from "styled-components";

export const StyledCitiesList = styled.ul`
    display: flex;
    justify-content: flex-start;
    list-style: none;
    padding: 0;
    height: 35px;
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

export const DeleteSpan = styled.span`
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%,-25%);
`;