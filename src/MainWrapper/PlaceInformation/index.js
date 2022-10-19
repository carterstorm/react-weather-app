import { TemperatureElement, WeatherImage, WeatherInformation, Wrapper } from "./styled";
import { WeatherItem } from "./WeatherItem";
import thermometer from "../../svg/thermometer.svg"

export const PlaceWeatherInformation = () => (
    <Wrapper>
        <p>Kraków</p>
        <p>Pochmurno</p>
        <WeatherInformation>
            <WeatherImage></WeatherImage>
            <TemperatureElement>34°</TemperatureElement>
            <div>
                <WeatherItem
                    url={thermometer}
                    text={"Odczuwalna temperatura"}
                    data={"30"}
                />
                <WeatherItem />
                <WeatherItem />
            </div>
        </WeatherInformation>
    </Wrapper>
);