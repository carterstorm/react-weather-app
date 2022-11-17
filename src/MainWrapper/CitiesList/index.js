import { CityButton } from "../styled";
import { CityItem, CityText, DeleteSpan, StyledCitiesList } from "./styled";

export const CitiesList = ({ userCities }) => {
    return (
        <StyledCitiesList>
            {userCities.map(city => (
                <CityItem key={city.id}>
                    <CityText>{city.name}</CityText>
                    <CityButton remove>
                        <DeleteSpan>-</DeleteSpan>
                    </CityButton>
                </CityItem>
            ))}
        </StyledCitiesList>
    )
};