import { Data, Image, StyledWeatherItem, Text } from "./styled";

export const WeatherItem = ({ url, text, data }) => (
    <StyledWeatherItem>
        <Image src={url} />
        <Text>{text}</Text>
        <Data>{data}</Data>
    </StyledWeatherItem>
);