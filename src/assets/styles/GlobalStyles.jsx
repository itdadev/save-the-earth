import { css, Global } from "@emotion/react";

const style = css`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
    line-height: 1.2;
    overflow-x: hidden;
  }

  body {
    overflow-x: hidden;
    box-sizing: border-box;
    font-size: 1.6rem;
    padding: 0;
    margin: 0;
    word-break: keep-all;
    font-family: "Gmarket-Sans", sans-serif;
    color: #000;
    line-height: 1.5;
  }

  img {
    display: inline-block;
    content: "";
    border: 0;
    outline: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  a {
    color: inherit;
    font-size: inherit;
    text-decoration: none;
  }

  ul,
  li {
    list-style: none;
  }

  button {
    color: inherit;
    font: inherit;
    cursor: pointer;
    background: inherit;
  }

  .ellipsis-1 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .ellipsis-5 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
`;

function GlobalStyles() {
  return <Global styles={style} />;
}

export default GlobalStyles;
