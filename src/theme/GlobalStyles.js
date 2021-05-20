import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyles = createGlobalStyle`
  
  :root {
    ${colors}
  }
`;

export default GlobalStyles;
