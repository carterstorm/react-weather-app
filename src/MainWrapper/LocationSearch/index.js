import { useState } from "react";
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

export const LocationSearch = ({ cities }) => {

    const [inputValue, setInputValue] = useState("");

    return (
        <StyledLocationSearch>
            <Container>
                <SearchContainer>
                    Wybierz miasto
                </SearchContainer>
                <SelectList>
                    <Input
                        placeholder="Szukaj miasta"
                        value={inputValue}
                        onChange={({ target }) => setInputValue(target.value.toLowerCase())}
                    />
                    {!!cities && cities.map(city => (
                        <SelectItem key={city.id}>{city.name}</SelectItem>
                    ))}
                </SelectList>
            </Container>

            <Button img={searchImage} />
            <Button img={locationImage} />
        </StyledLocationSearch>
    )

};