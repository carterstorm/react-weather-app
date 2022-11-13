import { WeatherItem } from "../WeatherItem";
import { Wrapper } from "./styled";
import sunrise from "../../../svg/sunrise.svg";
import sunset from "../../../svg/sunset.svg";
import max_temp from "../../../svg/max_temp.svg";
import min_temp from "../../../svg/min_temp.svg";

export const AdditionalWeatherInformation = ({ apiSearch }) => {

    const dateSunrise = new Date(apiSearch.sunrise * 1000);
    const dateSunset = new Date(apiSearch.sunset * 1000);

    const getHoursAndMinutes = (item) => `${item.getHours()}:${item.getMinutes()} `;

    return (
        <Wrapper>
            <WeatherItem
                url={sunrise}
                text={"Wschód:"}
                data={getHoursAndMinutes(dateSunrise)}
            />
            <WeatherItem
                url={sunset}
                text={"Zachód:"}
                data={getHoursAndMinutes(dateSunset)}
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
    )
};