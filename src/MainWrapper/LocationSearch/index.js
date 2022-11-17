import { CityButton } from "../styled";
import { ContainerSearch, Input, StyledLocationSearch } from "./styled";
import searchImage from "../../svg/search.svg";
import locationImage from "../../svg/location.svg";
import { Button } from "../Button";

export const LocationSearch = ({ searchCity, apiSearch, userCities, onFormSubmit, setSearchCity, setUserCities }) => {

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
        <StyledLocationSearch onSubmit={onFormSubmit}>
            <ContainerSearch>
                <Input
                    placeholder="Wpisz szukane miasto"
                    value={searchCity}
                    onChange={({ target }) => setSearchCity(target.value)}
                />
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
            </ContainerSearch>
            <Button
                img={searchImage} />
            <Button
                img={locationImage} />
        </StyledLocationSearch>
    )
};