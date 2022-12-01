import {
    Circle,
    CircleBox,
    LoadingText,
    Wrapper
} from "./styled";

export const Loading = () => (
    <Wrapper>
        <CircleBox>
            <Circle />
            <Circle />
            <Circle />
        </CircleBox>
        <LoadingText>Loading data from OpenWeather API</LoadingText>
    </Wrapper>
); 