import { WeatherItem } from "../WeatherItem";
import { Wrapper } from "./styled";
import sunrise from "../../../svg/sunrise.svg";
import sunset from "../../../svg/sunset.svg";
import max_temp from "../../../svg/max_temp.svg";
import min_temp from "../../../svg/min_temp.svg";

export const AdditionalWeatherInformation = () => (
    <Wrapper>
        <WeatherItem
            url={sunrise}
            text={"Wschód:"}
            data={"7:11"}
        />
        <WeatherItem
            url={sunset}
            text={"Zachód:"}
            data={"17:58"}
        />
        <WeatherItem
            url={max_temp}
            text={"Max. temperatura:"}
            data={"17"}
        />
        <WeatherItem
            url={min_temp}
            text={"Min. temperatura:"}
            data={"2"}
        />
    </Wrapper>
);