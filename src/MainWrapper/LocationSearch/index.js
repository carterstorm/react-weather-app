import searchImage from "../../svg/search.svg";
import locationImage from "../../svg/location.svg";
import { SearchContainer, SelectList, StyledLocationSearch, Container } from "./styled";
import { Button } from "../Button";

export const LocationSearch = () => (
    <StyledLocationSearch>
        <Container>
            <SearchContainer>
                Wybierz miasto
            </SearchContainer>
            <SelectList>
            </SelectList>
        </Container>

        <Button img={searchImage} />
        <Button img={locationImage} />
    </StyledLocationSearch>
);