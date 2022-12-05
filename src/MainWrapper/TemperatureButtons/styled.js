import styled from "styled-components";

export const Wrapper = styled.div`
    width: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TemperatureButton = styled.button`
    border: none;
    background-color: transparent;
    &:hover {
        cursor: pointer;
    }
`;