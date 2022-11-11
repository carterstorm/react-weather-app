import searchImage from "../../svg/search.svg";
import locationImage from "../../svg/location.svg";
import {
    StyledLocationSearch,
    Container,
    Input,
} from "./styled";
import { Button } from "../Button";
import { useState } from "react";
import { useApiSearch } from "../../useSearchApi";

export const LocationSearch = () => {

    const [searchCity, setSearchCity] = useState("");

    const apiSearch = useApiSearch();
    console.log(apiSearch);

    return (
        <StyledLocationSearch>
            <Container>
                <Input
                    placeholder="Wpisz szukane miasto"
                    value={searchCity}
                    onChange={({ target }) => setSearchCity(target.value)}
                />
            </Container>
            <Button
                img={searchImage} />
            <Button
                img={locationImage} />
        </StyledLocationSearch>
    )
};