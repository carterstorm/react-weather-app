import searchImage from "../../svg/search.svg";
import locationImage from "../../svg/location.svg";
import { SearchInput, StyledLocationSearch } from "./styled";
import { Button } from "../Button";

export const LocationSearch = () => (
    <StyledLocationSearch>
        <SearchInput />
        <Button img={searchImage} />
        <Button img={locationImage} />
    </StyledLocationSearch>
);