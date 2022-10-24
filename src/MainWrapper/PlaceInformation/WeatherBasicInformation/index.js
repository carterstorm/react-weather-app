import { WeatherItem } from "../WeatherItem";
import thermometer from "../../../svg/thermometer.svg";
import humidity_low from "../../../svg/humidity_low.svg";
import wind from "../../../svg/wind.svg";
import { Wrapper } from "../WeatherBasicInformation/styled";

export const WeatherBasicInformation = () => (
    <Wrapper>
        <WeatherItem
            url={thermometer}
            text={"Odczuwalna temperatura:"}
            data={"30"}
        />
        <WeatherItem
            url={humidity_low}
            text={"Wilgotność:"}
            data={"12%"}
        />
        <WeatherItem
            url={wind}
            text={"Prędkość wiatru:"}
            data={"12 m/s"}
        />
    </Wrapper>
);