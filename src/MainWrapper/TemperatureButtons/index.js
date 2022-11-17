import { Button } from "../Button";
import { StyledTemperatureButtons } from "./styled";

export const TemperatureButtons = () => (
    <StyledTemperatureButtons>
        <Button content={"°C"} />
        {"|"}
        <Button content={"°F"} />
    </StyledTemperatureButtons>
);