import { createGlobalStyle } from "styled-components";
import { colors, fonts } from "./stylesVariables";

export const GlobalStyles = createGlobalStyle`
    html,body{
        padding: 0;
        margin: 0;
        font-family: "Roboto", sans-serif;
        font-size: 15px;
        background-color: ${colors.background.secondary};
    }
    h1{
        font-family: "Cabin", sans-serif;
        color${colors.font.title};
        font-size: 60px;
    }
`;
export default GlobalStyles;
