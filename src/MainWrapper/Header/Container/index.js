import { Button } from "../Button";
import { CitySearchInput, Location, TemperatureButtons, Wrapper } from "./styled";
import search from "../../../svg/search.svg";
import location from "../../../svg/location.svg";
import { useGeolocation } from "../../../useGeolocationApi";

export const Container = () => {

    const onFormSubmit = (event) => {
        event.preventDefault();
    }

    const locationData = useGeolocation();
    console.log(locationData);

    return (
        <Wrapper>
            <Location onSubmit={onFormSubmit}>
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

