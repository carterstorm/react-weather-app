import { WeatherItem } from "../WeatherItem";
import { Wrapper } from "./styled";

export const AdditionalWeatherInformation = () => (
    <Wrapper>
        <WeatherItem
            url={"example"}
            text={"Wschód:"}
            data={"7:11"}
        />
        <WeatherItem
            url={"example"}
            text={"Zachód:"}
            data={"17:58"}
        />
        <WeatherItem
            url={"example"}
            text={"Max. temperatura:"}
            data={"17"}
        />
        <WeatherItem
            url={"example"}
            text={"Min. temperatura:"}
            data={"2"}
        />
    </Wrapper>
);