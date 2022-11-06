import styled from "styled-components";

export const StyledLocationSearch = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    width: 100%;
    position: relative;
`;

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    padding-left: 20px;
    height: 30px;
    border: 1px solid black;
    border-radius: 5px;
`;

export const SelectList = styled.ul`
    /* display: none; */
    margin: 0;
    padding: 0;
    position: absolute;
    top: 35px;
    left: 0;
    width: 400px;
    height: 20vh;
    z-index: 1;
    border: 1px solid black;
    border-radius: 5px;
    list-style: none;
    overflow-y: auto;
    background-color: white;
    
`;

export const SelectItem = styled.li`
    padding: 10px 10px 10px 20px;
    cursor: pointer;
    transition: .2s;
    &:hover {
        background-color: rgb(200, 200, 200);
    }
`;