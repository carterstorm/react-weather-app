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
    const [selectCity, setSelectCity] = useState("");
    const [open, setOpen] = useState(false);

    return (
        <StyledLocationSearch>
            <Container>
                <SearchContainer onClick={() => setOpen(!open)}>
                    {selectCity ? selectCity : "Wybierz miasto"}
                </SearchContainer>
                <SelectList open={open}>
                    <Input
                        placeholder="Szukaj miasta"
                        value={inputValue}
                        onChange={({ target }) => setInputValue(target.value)}
                    />
                    {!!cities && cities.map(city => (
                        <SelectItem
                            hidden={!city.name.startsWith(inputValue)}
                            key={city.id}
                            onClick={() => (city.name !== selectCity ? setSelectCity(city.name) : null)}
                            active={city.name === selectCity}
                        >{city.name}
                        </SelectItem>
                    ))}
                </SelectList>
            </Container>

            <Button img={searchImage} />
            <Button img={locationImage} />
        </StyledLocationSearch>
    )

};