import { ForecastContainer, ForecastItem, Heading, Temperature, Time, WeatherImage, Wrapper } from "./styled";
import rainy from "../../svg/rainy.svg"

export const Forecast = () => (
    <Wrapper>
        <Heading>hourly forecast</Heading>
        <ForecastContainer>
            <ForecastItem>
                <Time>10:00</Time>
                <WeatherImage src={rainy} />
                <Temperature>12°</Temperature>
            </ForecastItem>

            <ForecastItem>
                <Time>10:00</Time>
                <WeatherImage src={rainy} />
                <Temperature>12°</Temperature>
            </ForecastItem>

            <ForecastItem>
                <Time>10:00</Time>
                <WeatherImage src={rainy} />
                <Temperature>12°</Temperature>
            </ForecastItem>

            <ForecastItem>
                <Time>10:00</Time>
                <WeatherImage src={rainy} />
                <Temperature>12°</Temperature>
            </ForecastItem>

            <ForecastItem>
                <Time>10:00</Time>
                <WeatherImage src={rainy} />
                <Temperature>12°</Temperature>
            </ForecastItem>

            <ForecastItem>
                <Time>10:00</Time>
                <WeatherImage src={rainy} />
                <Temperature>12°</Temperature>
            </ForecastItem>
        </ForecastContainer>
    </Wrapper>
); 