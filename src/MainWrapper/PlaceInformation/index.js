import { TemperatureElement, WeatherImage, WeatherInformation, Wrapper } from "./styled";

export const PlaceWeatherInformation = () => (
    <Wrapper>
        <p>Kraków</p>
        <p>Pochmurno</p>
        <WeatherInformation>
            <WeatherImage></WeatherImage>
            <TemperatureElement>34°</TemperatureElement>
            <div>
                <div>
                    <span></span>
                    <p></p>
                    <span></span>
                </div>
                <div>
                    <span></span>
                    <p></p>
                    <span></span>
                </div>
                <div>
                    <span></span>
                    <p></p>
                    <span></span>
                </div>
            </div>
        </WeatherInformation>
    </Wrapper>
);