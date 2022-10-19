import { TemperatureElement, WeatherImage, WeatherInformation, Wrapper } from "./styled";
import { WeatherItem } from "./WeatherItem";

export const PlaceWeatherInformation = () => (
    <Wrapper>
        <p>Kraków</p>
        <p>Pochmurno</p>
        <WeatherInformation>
            <WeatherImage></WeatherImage>
            <TemperatureElement>34°</TemperatureElement>
            <div>
                <WeatherItem />
                <WeatherItem />
                <WeatherItem />
            </div>
        </WeatherInformation>
    </Wrapper>
);