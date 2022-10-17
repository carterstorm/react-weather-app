import { Buttons } from "../Buttons";
import { CitySearchInput, Location, TemperatureButtons, Wrapper } from "./styled";


export const Container = () => (
    <Wrapper>
        <Location>
            <CitySearchInput />
            <Buttons />
        </Location>
        <TemperatureButtons>
            <Buttons />
        </TemperatureButtons>
    </Wrapper >
);