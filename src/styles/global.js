import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
// Reset CSS
html,
body,
div,
span,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
address,
del,
em,
img,
small,
strong,
b,
u,
i,
hr,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
menu,
nav,
output,
ruby,
section,
summary,
button,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    font-size: 100%;
    vertical-align: baseline;
    word-wrap: break-word;
}

html {
    line-height: 1;
}

ol,
ul {
    list-style: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

caption,
th,
td {
    text-align: inherit;
    font-weight: inherit;
    vertical-align: middle;
}

q,
blockquote {
    quotes: none;
}

a img {
    border: none;
}

article,
aside,
details,
figure,
footer,
header,
menu,
nav,
section,
summary {
    display: block;
}
// Base CSS
* {
    box-sizing: border-box;
    outline: 0;
    box-shadow: 0;
}

html {
    font-size: 10px;
    -webkit-text-size-adjust: none;
    -ms-text-size-adjust: none;
    -moz-text-size-adjust: none;
    text-size-adjust: none;
}

body {
    background: #04011C;
    color: #fff;
    font-weight: 400;
    font-size: 1.6rem;
    @media screen and (max-width: 1023px) {
		&.hide-scroll {
			overflow: hidden;
		}
	}
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

a {
    text-decoration: none;
}

img {
    max-width: 100%;
}

.container {
    max-width: calc(100% - 160px);
    margin: 0 auto;

    @media screen and (max-width: 1200px){
        max-width: calc(100% - 120px);
	}

    @media (max-width: 1023px) {
        max-width: calc(100% - 32px);
    }
}

.app {
    min-height: 100vh;
}
`;

export default GlobalStyle;
