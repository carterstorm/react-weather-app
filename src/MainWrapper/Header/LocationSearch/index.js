
import searchImage from "../../../svg/search.svg";
import location from "../../../svg/location.svg";
import { SearchInput, StyledLocationSearch } from "./styled";
import { Button } from "../Button";

export const LocationSearch = () => {

    const onFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <StyledLocationSearch onSubmit={onFormSubmit}>
            <SearchInput />
            <Button img={searchImage} />
            <Button img={location} />
        </StyledLocationSearch>
    )
};