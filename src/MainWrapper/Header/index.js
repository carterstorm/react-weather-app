import { useState } from "react";
import { useApiData } from "../../useApiData";
import searchImage from "../../svg/search.svg";
import locationImage from "../../svg/location.svg";
import { Button } from "./Button";
import { DateContainer } from "./DateContainer";
import {
    CitiesItem,
    CitiesList,
    Container,
    LocationSearch,
    SearchInput,
    TemperatureButtons,
    Wrapper
} from "./styled";

export const Header = () => {

    const [search, setSearch] = useState("");

    const apiData = useApiData(search);


    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(apiData);
    };

    const onInputChange = (event) => {
        setSearch(event.target.value);
    };

    return (
        <Wrapper>
            <CitiesList>
                <CitiesItem>
                    Londyn
                </CitiesItem>
                <CitiesItem>
                    Paryż
                </CitiesItem>
                <CitiesItem>
                    Warszawa
                </CitiesItem>
                <CitiesItem>
                    Belgrad
                </CitiesItem>
                <CitiesItem>
                    Praga
                </CitiesItem>
            </CitiesList>

            <Container>
                <LocationSearch onSubmit={onFormSubmit}>
                    <SearchInput
                        value={search}
                        onChange={onInputChange}
                    />
                    <Button img={searchImage} />
                    <Button img={locationImage} />
                </LocationSearch>
                <TemperatureButtons>
                    <Button content={"°C"} />
                    {"|"}
                    <Button content={"°F"} />
                </TemperatureButtons>
            </Container >

            <DateContainer />
        </Wrapper>
    )
};