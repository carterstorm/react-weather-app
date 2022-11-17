import { CityButton } from "../styled";
import { AdditionalWeatherInformation } from "./AdditionalWeatherInformation";
import { Place, SkyInfo, WeatherImage, WeatherInformation, WeatherTemperature, Wrapper } from "./styled";
import { WeatherBasicInformation } from "./WeatherBasicInformation";

export const PlaceWeatherInformation = ({ apiSearch, userCities, searchCity, setUserCities }) => {

    const capitalizeFirstLetter = (item) => item.charAt(0).toUpperCase() + item.slice(1);

    const apiWeatherIcon = apiSearch.icon;

    const addCity = (searchCity) => {

        if (userCities.some(({ inputName, name }) => inputName.toUpperCase() === searchCity.toUpperCase()
            ||
            name.toUpperCase() === searchCity.toUpperCase())) {
            return null;
        } else {
            setUserCities(userCities => [
                ...userCities,
                {
                    id: userCities.length === 0 ? 1 : userCities[userCities.length - 1].id + 1,
                    inputName: searchCity,
                    name: apiSearch.name,
                }
            ]);
        }
    };

    return (
        <Wrapper>
            <Place>
                {apiSearch.name} - {apiSearch.country}
                {apiSearch.state === "success" ? (
                    <CityButton
                        type="button"
                        add
                        onClick={() => addCity(searchCity)}
                    >
                        +
                    </CityButton>
                ) :
                    null
                }
            </Place>
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