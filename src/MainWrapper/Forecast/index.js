import { ForecastContainer, Heading, Wrapper } from "./styled";
import rainy from "../../svg/rainy.svg"
import { ForecastItem } from "./ForecastItem";
import { getHoursAndMinutes } from "../../getHoursAndMinutes";

export const Forecast = ({ apiSearch }) => {

    const changeTime = apiSearch.data.map(({ dt }) => {
        const time = new Date(dt * 1000);
        return getHoursAndMinutes(time)
    });

    return (
        <Wrapper>
            <Heading>temperatura godzinowa</Heading>
            <ForecastContainer>
                <ForecastItem img={rainy}></ForecastItem>
            </ForecastContainer>
        </Wrapper>
    )
};