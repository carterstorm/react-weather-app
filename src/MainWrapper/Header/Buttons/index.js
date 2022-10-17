import { Wrapper } from "./styled";

export const Buttons = () => (
    <Wrapper>
        <button className="button">
            <span className="material-symbols-outlined">
                search
            </span>
        </button>
        <button className="button">
            <span className="material-symbols-outlined">
                location_on
            </span>
        </button>
    </Wrapper>
);