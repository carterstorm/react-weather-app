import { createGlobalStyle } from "styled-components";
import "normalize.css";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    :root {
        font-family: 'Oswald', sans-serif;
    }

    .App {
        display: flex;
        justify-content: center;
    }
`;