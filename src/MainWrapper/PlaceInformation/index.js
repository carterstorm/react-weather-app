import { TemperatureElement, WeatherImage, WeatherInformation, Wrapper } from "./styled";
import { WeatherItem } from "./WeatherItem";
import thermometer from "../../svg/thermometer.svg";
import humidity_low from "../../svg/humidity_low.svg";
import wind from "../../svg/wind.svg";

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
                <WeatherItem
                    url={humidity_low}
                    text={"Wilgotność"}
                    data={"12%"}
                />
                <WeatherItem
                    url={wind}
                    text={"Prędkość wiatru"}
                    data={"12 km/h"}
                />
            </div>
        </WeatherInformation>
    </Wrapper>
);