import { AdditionalWeatherInformation } from "./AdditionalWeatherInformation";
import { AddButton, Place, PlaceContainer, SkyInfo, WeatherImage, WeatherInformation, WeatherTemperature, Wrapper } from "./styled";
import { WeatherBasicInformation } from "./WeatherBasicInformation";

export const PlaceWeatherInformation = ({ apiSearch, userCities, setUserCities, showValue }) => {

    const capitalizeFirstLetter = (item) => item.charAt(0).toUpperCase() + item.slice(1);

    const apiWeatherIcon = apiSearch.icon;

    const deleteFirstUserCity = userCities.filter((userCity, index) => {
        const removeIndex = 0;
        return userCities[removeIndex] !== userCities[index];
    })

    const setCity = (userCities) => [
        ...userCities,
        {
            id: userCities.length === 0 ? 1 : userCities[userCities.length - 1].id + 1,
            name: apiSearch.name,
        }
    ];

    const addCity = () => {
        if (userCities.some(({ name }) => name.toUpperCase() === apiSearch.name.toUpperCase())) {
            return null;
        } else {

            if (userCities.length < 5) {
                setUserCities(setCity);
            } else {
                setUserCities(deleteFirstUserCity);
                setUserCities(setCity);
            };
        };
    };

    return (
        <Wrapper>
            <PlaceContainer>
                <Place>
                    {apiSearch.name} - {apiSearch.country}
                </Place>
                <AddButton
                    type="button"
                    showValue={showValue}
                    onClick={() => addCity()}
                >
                    +
                </AddButton>
            </PlaceContainer>
            <SkyInfo>{capitalizeFirstLetter(apiSearch.description)}</SkyInfo>
            <WeatherInformation>
                <WeatherImage src={`http://openweathermap.org/img/wn/${apiWeatherIcon}@2x.png`} />
                <WeatherTemperature>{`${apiSearch.temp.toFixed()}°C`}</WeatherTemperature>
                <WeatherBasicInformation apiSearch={apiSearch} />
            </WeatherInformation>
            <AdditionalWeatherInformation apiSearch={apiSearch} />
        </Wrapper>
    )
};