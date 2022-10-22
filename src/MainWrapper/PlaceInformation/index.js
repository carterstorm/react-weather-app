import { Place, SkyInfo, WeatherImage, WeatherInformation, WeatherTemperature, Wrapper } from "./styled";
import { WeatherBasicInformation } from "./WeatherBasicInformation";

export const PlaceWeatherInformation = () => (
    <Wrapper>
        <Place>Kraków</Place>
        <SkyInfo>Pochmurno</SkyInfo>
        <WeatherInformation>
            <WeatherImage />
            <WeatherTemperature>34°</WeatherTemperature>
            <WeatherBasicInformation />
        </WeatherInformation>
    </Wrapper>
);