import styled from 'styled-components';

const Icon = styled.i`
    font-family: 'labiicons' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`;

export const Cart = styled(Icon)`
    &:before {
        content: "\\e900";
    }
`;

export const ArrowDownMini = styled(Icon)`
    &:before {
        content: "\\e901";
    }
`;

export const User = styled(Icon)`
    &:before {
        content: "\\e902";
    }
`;

export const Search = styled(Icon)`
    &:before {
        content: "\\e903";
    }
`;

export const ArrowLeft = styled(Icon)`
    &:before {
        content: "\\e904";
    }
`;

export const ArrowRight = styled(Icon)`
    &:before {
        content: "\\e905";
    }
`;

export const Facebook = styled(Icon)`
    &:before {
        content: "\\ea90";
    }
`;

export const Instagram = styled(Icon)`
    &:before {
        content: "\\ea92";
    }
`;

export const Youtube = styled(Icon)`
    &:before {
        content: "\\ea9d";
    }
`;

export const Linkedin = styled(Icon)`
    &:before {
        content: "\\eaca";
    }
`;