import { AdditionalWeatherInformation } from "./AdditionalWeatherInformation";
import { Place, SkyInfo, WeatherImage, WeatherInformation, WeatherTemperature, Wrapper } from "./styled";
import { WeatherBasicInformation } from "./WeatherBasicInformation";

export const PlaceWeatherInformation = ({ apiSearch }) => {

    const capitalizeFirstLetter = (item) => item.charAt(0).toUpperCase() + item.slice(1);

    const apiWeatherIcon = apiSearch.icon;

    return (
        <Wrapper>
            <Place>{apiSearch.name} - {apiSearch.country}</Place>
            <SkyInfo>{capitalizeFirstLetter(apiSearch.description)}</SkyInfo>
            <WeatherInformation>
                <WeatherImage src={`http://openweathermap.org/img/wn/${apiWeatherIcon}@2x.png`} />
                <WeatherTemperature>{apiSearch.temp.toFixed()}</WeatherTemperature>
                <WeatherBasicInformation apiSearch={apiSearch} />
            </WeatherInformation>
            <AdditionalWeatherInformation apiSearch={apiSearch} />
        </Wrapper>
    )
};