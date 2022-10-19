import { Container } from "./Container";
import { DateContainer } from "./DateContainer";
import { CitiesItem, CitiesList, Wrapper } from "./styled";

export const Header = () => (
    <Wrapper>
        <CitiesList>
            <CitiesItem>
                Londyn
            </CitiesItem>
            <CitiesItem>
                Paryz
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
        <Container />
        <DateContainer />
    </Wrapper>
);