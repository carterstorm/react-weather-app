import { Wrapper } from "./styled";
import { Date } from "./styled";
import { useDate } from "./useDate";

export const DateContainer = () => {
    const date = useDate();

    return (
        <Wrapper>
            <Date>
                Dzisiaj jest
                {" "}
                {date.toLocaleDateString("pl-PL", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                })}
            </Date>
        </Wrapper>
    );
};