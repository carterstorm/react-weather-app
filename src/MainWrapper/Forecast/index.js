import { ForecastItem, Heading, Temperature, Time, WeatherImage, Wrapper } from "./styled";
import rainy from "../../svg/rainy.svg"

export const Forecast = () => (
    <Wrapper>
        <Heading>hourly forecast</Heading>
        <ForecastItem>
            <Time>10:00</Time>
            <WeatherImage src={rainy} />
            <Temperature>12°</Temperature>
        </ForecastItem>
    </Wrapper>
); 