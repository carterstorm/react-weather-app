import { TemperatureButton, Wrapper } from "./styled";

export const TemperatureButtons = ({ units, setUnits }) => {

    const getTempValue = () => {
        console.log(units);
    };

    return (
        <Wrapper>
            <TemperatureButton onClick={getTempValue} type="button">°C</TemperatureButton>
            {"|"}
            <TemperatureButton type="button">°F</TemperatureButton>
        </Wrapper>
    )
};