import { CityItem, CityText, DeleteButton, DeleteSpan, StyledCitiesList } from "./styled";

export const CitiesList = ({ userCities }) => {
    return (
        <StyledCitiesList>
            {userCities.map(city => (
                <CityItem key={city.id}>
                    <CityText>{city.name}</CityText>
                    <DeleteButton remove>
                        <DeleteSpan>-</DeleteSpan>
                    </DeleteButton>
                </CityItem>
            ))}
        </StyledCitiesList>
    )
};