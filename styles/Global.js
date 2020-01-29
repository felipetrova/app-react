import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

const GlobalStyles = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        vertical-align: baseline;
        box-sizing: border-box;
    }

    body {
        background: #FFF;
        line-height: 1.3;
        font-size: 100%;
        font-family: "Roboto", sans-serif;
    }

    a {
        text-decoration: none;
    }

    ol, ul {
        list-style: none;
    }

    img {
        display: block;
        width: 100%;
        height: auto;
    }

    button {
        border: 0;
        outline: none;
        appearance: none;
    }

    section {
        padding: 20px 0;
    }

    ${media.greaterThan("320px")`
        .hide-xs {
            display: none !important;
        }
        .display-xs {
            display: block !important;
        }
    `}

    ${media.greaterThan("medium")`
        .hide-sm {
            display: none !important;
        }
        .display-sm {
            display: block !important;
        }
    `}

    ${media.greaterThan("1024px")`
        .hide-md {
            display: none !important;
        }
        .display-md {
            display: block !important;
        }
    `}

    input,
    select,
    textarea {
        appearance: none;
        border: 0;
    }
`;

export default GlobalStyles;