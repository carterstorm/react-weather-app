import styled, { keyframes } from "styled-components";


const circleAnimation = keyframes`
    0% {
        top: 50%;
        height: 5px;
        border-radius: 50px 50px 25px 25px;
    };
    40% {
        height: 20px;
        border-radius: 50%;
    };

    100% {
        top: 0;
    };
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 70vh;
    align-items: center;
    justify-content: center;
`;

export const CircleBox = styled.div`
    display: flex;
    position: relative;
    width: 200px;
    height: 60px;
`;

export const Circle = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(-25%, -50%);
    background-color: black;
    animation: ${circleAnimation} 0.4s alternate infinite ease;

    &:nth-child(2) {
        left: 50%;
        animation-delay: .1s;
    }

    &:nth-child(3) {
        left: 75%;
        animation-delay: .2s;
    }
`;

export const LoadingText = styled.p`
    font-size: 18px;
`;