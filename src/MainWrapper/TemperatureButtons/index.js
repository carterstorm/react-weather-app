import { TemperatureButton, Wrapper } from "./styled";

export const TemperatureButtons = () => (
    <Wrapper>
        <TemperatureButton type="button">°C</TemperatureButton>
        <TemperatureButton type="button">°F</TemperatureButton>
    </Wrapper>
);