import { ForecastContainer, Heading, Wrapper } from "./styled";
import { ForecastItem } from "./ForecastItem";

export const Forecast = ({ apiSearch }) => {

    return (
        <Wrapper>
            <Heading>temperatura godzinowa</Heading>
            <ForecastContainer>
                {apiSearch.data.map(({ convertedTime, temp, icon }) => (
                    <ForecastItem
                        key={convertedTime}
                        icon={icon}
                        convertedTime={convertedTime}
                        temp={temp}
                    />
                ))}
            </ForecastContainer>
        </Wrapper>
    )
};