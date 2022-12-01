import { ForecastContainer, Heading, Wrapper } from "./styled";
import { ForecastItem } from "./ForecastItem";

export const Forecast = ({ apiSearch }) => {

    return (
        <Wrapper>
            <Heading>temperatura godzinowa</Heading>
            <ForecastContainer>
                {apiSearch.data.map(({ time, temp, icon }) => (
                    <ForecastItem
                        key={time}
                        icon={icon}
                        convertedTime={time}
                        temp={temp}
                    />
                ))}
            </ForecastContainer>
        </Wrapper>
    )
};