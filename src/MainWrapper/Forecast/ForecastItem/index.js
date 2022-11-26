import { StyledForecastItem, Temperature, Time, WeatherImage } from "./styled";

export const ForecastItem = ({ icon, convertedTime, temp }) => (
    <StyledForecastItem>
        <Time>{convertedTime}</Time>
        <WeatherImage src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
        <Temperature>{`${temp.toFixed()}°C`}</Temperature>
    </StyledForecastItem>
);