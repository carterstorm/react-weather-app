import { AdditionalWeatherInformation } from "./AdditionalWeatherInformation";
import { Place, SkyInfo, WeatherImage, WeatherInformation, WeatherTemperature, Wrapper } from "./styled";
import { WeatherBasicInformation } from "./WeatherBasicInformation";

export const PlaceWeatherInformation = ({ apiSearch }) => {

    const capitalizeFirstLetter = (item) => item.charAt(0).toUpperCase() + item.slice(1);

    console.log(typeof apiSearch.temp)

    return (
        <Wrapper>
            <Place>{apiSearch.name} - {apiSearch.country}</Place>
            <SkyInfo>{capitalizeFirstLetter(apiSearch.description)}</SkyInfo>
            <WeatherInformation>
                <WeatherImage />
                <WeatherTemperature>{apiSearch.temp.toFixed(0)}</WeatherTemperature>
                <WeatherBasicInformation apiSearch={apiSearch} />
            </WeatherInformation>
            <AdditionalWeatherInformation />
        </Wrapper>
    )
};