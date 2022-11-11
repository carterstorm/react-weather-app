import { AdditionalWeatherInformation } from "./AdditionalWeatherInformation";
import { Place, SkyInfo, WeatherImage, WeatherInformation, WeatherTemperature, Wrapper } from "./styled";
import { WeatherBasicInformation } from "./WeatherBasicInformation";

export const PlaceWeatherInformation = ({ apiSearch }) => {

    return (
        <Wrapper>
            <Place>{apiSearch.name} - {apiSearch.country}</Place>
            <SkyInfo>Pochmurno</SkyInfo>
            <WeatherInformation>
                <WeatherImage />
                <WeatherTemperature>34°</WeatherTemperature>
                <WeatherBasicInformation />
            </WeatherInformation>
            <AdditionalWeatherInformation />
        </Wrapper>
    )
};