import {createGlobalStyle} from "styled-components";
import "@fontsource/kaushan-script";
import "@fontsource/sirin-stencil";

const GlobalStyles = createGlobalStyle`
    *,*:before,*:after {
        margin: 0;
        padding: 0;
    }   
    body{
        font-family: "Sirin-stencil", Arial, Helvetica, sans-serif;
        overflow-x: hidden;
        color: #d6c9b3;
    }
    text{
        color: #d6c9b3;
    }
    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
        color: #d6c9b3;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
`
export default GlobalStyles;
