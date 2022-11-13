import { ForecastContainer, Heading, Wrapper } from "./styled";
import rainy from "../../svg/rainy.svg"
import { ForecastItem } from "./ForecastItem";

export const Forecast = () => (
    <Wrapper>
        <Heading>temperatura godzinowa</Heading>
        <ForecastContainer>
            <ForecastItem img={rainy}></ForecastItem>
        </ForecastContainer>
    </Wrapper>
); 