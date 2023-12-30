import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    } 

    *,
    ::after,
    ::before {
        box-sizing: inherit;
    }
    
    body {
        background: linear-gradient(
        90deg,
        rgba(5, 25, 55, 1) 40%,
        rgba(168, 235, 18, 1) 100%
        );
        height: 100vh;
    }
`
