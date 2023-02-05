import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

*:focus {
    outline: 0;
}

html, body, #root {
    height: 100%;
}

body{
    background-color: #000000;
    -webkit-font-size: #000;
}

body, input, botton {
    font-family: 'Montserrat', sans-serif;
}

a {
    text-decoration: none;
}

ul {
    list-style: none;
}

botton {
    cursor: pointer;
}
`;
