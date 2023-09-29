import { ContainerSearch, Input, StyledLocationSearch } from "./styled";
import searchImage from "../../svg/search.svg";
import { Button } from "../Button";
import { TemperatureButtons } from "../TemperatureButtons";

export const LocationSearch = ({ searchCity, onFormSubmit, setSearchCity, units, setUnits }) => (
    <StyledLocationSearch onSubmit={onFormSubmit}>
        <ContainerSearch>
            <Input
                placeholder="Wpisz szukane miasto"
                value={searchCity}
                onChange={({ target }) => setSearchCity(target.value)}
            />
            <Button
                img={searchImage} />
        </ContainerSearch>
        <TemperatureButtons
            units={units}
            setUnits={setUnits}
        />
    </StyledLocationSearch>
);