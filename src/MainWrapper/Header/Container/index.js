import { Button } from "../Button";
import { CitySearchInput, Location, TemperatureButtons, Wrapper } from "./styled";

export const Container = () => {
    return (
        <Wrapper>
            <Location>
                <CitySearchInput />
                <Button />
                <Button />
            </Location>
            <TemperatureButtons>
                <Button />
                <Button />
            </TemperatureButtons>
        </Wrapper >
    )
};

