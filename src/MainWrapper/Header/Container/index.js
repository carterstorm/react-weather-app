import { Button } from "../Button";
import { CitySearchInput, Location, TemperatureButtons, Wrapper } from "./styled";

export const Container = () => {
    return (
        <Wrapper>
            <Location>
                <CitySearchInput />
                <Button content=
                    {
                        <span className="material-symbols-outlined">search</span>
                    }
                />
                <Button content=
                    {
                        <span className="material-symbols-outlined">location_on</span>
                    }
                />
            </Location>
            <TemperatureButtons>
                <Button content={"°C"} />
                {"|"}
                <Button content={"°F"} />
            </TemperatureButtons>
        </Wrapper >
    )
};

