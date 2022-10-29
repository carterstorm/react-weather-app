
import { useState } from "react";
import searchImage from "../../../svg/search.svg";
import location from "../../../svg/location.svg";
import { SearchInput, StyledLocationSearch } from "./styled";
import { Button } from "../Button";
import { getLocationApi } from "../../../getLocationApi";

export const LocationSearch = () => {

    const [search, setSearch] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        getLocationApi(search);
    };

    const onInputChange = (event) => {
        setSearch(event.target.value);
    };

    return (
        <StyledLocationSearch onSubmit={onFormSubmit}>
            <SearchInput
                value={search}
                onChange={onInputChange}
            />
            <Button img={searchImage} />
            <Button img={location} />
        </StyledLocationSearch>
    )
};