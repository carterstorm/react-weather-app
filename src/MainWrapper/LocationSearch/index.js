import searchImage from "../../svg/search.svg";
import locationImage from "../../svg/location.svg";
import {
    StyledLocationSearch,
    Container,
} from "./styled";
import { Button } from "../Button";

export const LocationSearch = () => {

    return (
        <StyledLocationSearch>
            <Container>

            </Container>

            <Button
                img={searchImage} />
            <Button
                img={locationImage} />
        </StyledLocationSearch>
    )
};