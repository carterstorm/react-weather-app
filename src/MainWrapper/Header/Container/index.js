import { Button } from "../Button";
import { LocationSearch } from "../LocationSearch";
import { TemperatureButtons, Wrapper } from "./styled";

export const Container = () => (
    <Wrapper>
        <LocationSearch />
        <TemperatureButtons>
            <Button content={"°C"} />
            {"|"}
            <Button content={"°F"} />
        </TemperatureButtons>
    </Wrapper >
);