import { AdditionalWeatherInformation } from "./AdditionalWeatherInformation";
import { AddButton, Place, PlaceContainer, SkyInfo, WeatherImage, WeatherInformation, WeatherTemperature, Wrapper } from "./styled";
import { WeatherBasicInformation } from "./WeatherBasicInformation";

export const PlaceWeatherInformation = ({ apiSearch, userCities, setUserCities }) => {

    const capitalizeFirstLetter = (item) => item.charAt(0).toUpperCase() + item.slice(1);

    const apiWeatherIcon = apiSearch.icon;

    const addCity = () => {

        if (userCities.some(({ name }) => name.toUpperCase() === apiSearch.name.toUpperCase())) {
            return null;
        } else {
            setUserCities(userCities => [
                ...userCities,
                {
                    id: userCities.length === 0 ? 1 : userCities[userCities.length - 1].id + 1,
                    name: apiSearch.name,
                }
            ]);
        }
    };

    return (
        <Wrapper>
            <PlaceContainer>
                <Place>
                    {apiSearch.name} - {apiSearch.country}
                </Place>
                {apiSearch.state === "success" ? (
                    <AddButton
                        type="button"
                        add
                        onClick={() => addCity()}
                    >
                        +
                    </AddButton>
                ) :
                    null
                }
            </PlaceContainer>
            <SkyInfo>{capitalizeFirstLetter(apiSearch.description)}</SkyInfo>
            <WeatherInformation>
                <WeatherImage src={`http://openweathermap.org/img/wn/${apiWeatherIcon}@2x.png`} />
                <WeatherTemperature>{apiSearch.temp.toFixed()}</WeatherTemperature>
                <WeatherBasicInformation apiSearch={apiSearch} />
            </WeatherInformation>
            <AdditionalWeatherInformation apiSearch={apiSearch} />
        </Wrapper>
    )
};