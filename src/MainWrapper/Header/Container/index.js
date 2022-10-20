import { Button } from "../Button";
import { CitySearchInput, Location, TemperatureButtons, Wrapper } from "./styled";
import search from "../../../svg/search.svg";
import location from "../../../svg/location.svg";

export const Container = () => {
    return (
        <Wrapper>
            <Location>
                <CitySearchInput />
                <Button img={search} />
                <Button img={location} />
            </Location>
            <TemperatureButtons>
                <Button content={"°C"} />
                {"|"}
                <Button content={"°F"} />
            </TemperatureButtons>
        </Wrapper >
    )
};

