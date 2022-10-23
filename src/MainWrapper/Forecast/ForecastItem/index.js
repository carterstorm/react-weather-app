import { StyledForecastItem, Temperature, Time, WeatherImage } from "./styled";

export const ForecastItem = ({ img }) => (
    <StyledForecastItem>
        <Time>10:00</Time>
        <WeatherImage src={img} />
        <Temperature>12°</Temperature>
    </StyledForecastItem>

);