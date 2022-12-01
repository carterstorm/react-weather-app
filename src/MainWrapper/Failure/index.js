import { ErrorInfo, SadFace, Wrapper } from "./styled";

export const Failure = () => (
    <Wrapper>
        <SadFace>:-(</SadFace>
        <ErrorInfo>Coś poszło nie tak...</ErrorInfo>
        <ErrorInfo>Sprawdź pisownię wyszukiwanego miasta.</ErrorInfo>
        <ErrorInfo>Jeżeli błąd się powtarza prawdopodobnie jest on po naszej stronie... Postaramy się naprawić stronę w najbliższym moliwym czasie.</ErrorInfo>
    </Wrapper>
)