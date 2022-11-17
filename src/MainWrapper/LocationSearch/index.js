import { ContainerSearch, Input, StyledLocationSearch } from "./styled";
import searchImage from "../../svg/search.svg";
import locationImage from "../../svg/location.svg";
import { Button } from "../Button";

export const LocationSearch = ({ searchCity, onFormSubmit, setSearchCity }) => (
    <StyledLocationSearch onSubmit={onFormSubmit}>
        <ContainerSearch>
            <Input
                placeholder="Wpisz szukane miasto"
                value={searchCity}
                onChange={({ target }) => setSearchCity(target.value)}
            />
        </ContainerSearch>
        <Button
            img={searchImage} />
        <Button
            img={locationImage} />
    </StyledLocationSearch>
);