import { WeatherItem } from "../WeatherItem";
import thermometer from "../../../svg/thermometer.svg";
import humidity_low from "../../../svg/humidity_low.svg";
import wind from "../../../svg/wind.svg";
import { Wrapper } from "../WeatherBasicInformation/styled";

export const WeatherBasicInformation = ({ apiSearch }) => (
    <Wrapper>
        <WeatherItem
            url={thermometer}
            text={"Odczuwalna temperatura:"}
            data={`${apiSearch.feels_like.toFixed()}°C`}
        />
        <WeatherItem
            url={humidity_low}
            text={"Wilgotność:"}
            data={`${apiSearch.humidity}%`}
        />
        <WeatherItem
            url={wind}
            text={"Prędkość wiatru:"}
            data={`${apiSearch.speed} m/s`}
        />
    </Wrapper>
);