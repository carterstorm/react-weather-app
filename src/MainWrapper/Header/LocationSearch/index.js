
import searchImage from "../../../svg/search.svg";
import location from "../../../svg/location.svg";
import { SearchInput, StyledLocationSearch } from "./styled";
import { Button } from "../Button";

export const LocationSearch = () => {

    return (
        <StyledLocationSearch>
            <SearchInput />
            <Button img={searchImage} />
            <Button img={location} />
        </StyledLocationSearch>
    )
};