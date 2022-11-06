import searchImage from "../../svg/search.svg";
import locationImage from "../../svg/location.svg";
import {
    SearchContainer,
    SelectList,
    StyledLocationSearch,
    Container,
    SelectItem,
    Input,
} from "./styled";
import { Button } from "../Button";

export const LocationSearch = ({ cities }) => (
    <StyledLocationSearch>
        <Container>
            <SearchContainer>
                Wybierz miasto
            </SearchContainer>
            <SelectList>
                <Input
                    placeholder="Szukaj miasta"
                />
                {!!cities && cities.map(city => (
                    <SelectItem key={city.id}>{city.name}</SelectItem>
                ))}
            </SelectList>
        </Container>

        <Button img={searchImage} />
        <Button img={locationImage} />
    </StyledLocationSearch>
);