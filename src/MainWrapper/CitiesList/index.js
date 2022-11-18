import { CityItem, CityText, DeleteButton, DeleteSpan, StyledCitiesList } from "./styled";

export const CitiesList = ({ userCities, setUserCities }) => {

    const deleteUserCity = (id) => {
        setUserCities(userCities => userCities.filter(userCity => userCity.id !== id));
    }

    return (
        <StyledCitiesList>
            {userCities.map(city => (
                <CityItem key={city.id}>
                    <CityText>{city.name}</CityText>
                    <DeleteButton onClick={() => deleteUserCity(city.id)}>
                        <DeleteSpan>-</DeleteSpan>
                    </DeleteButton>
                </CityItem>
            ))}
        </StyledCitiesList>
    )
};