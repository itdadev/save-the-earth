import { css, Global } from "@emotion/react";
import { color } from "@/theme";

const style = css`
  @import url("https://webfontworld.github.io/gmarket/GmarketSans.css");

  html {
    font-size: 62.5%;
    box-sizing: border-box;
    line-height: 1.2;
    overflow-x: hidden;
  }

  body {
    width: 100vw;
    max-width: 100%;
    overflow-x: hidden;
    box-sizing: border-box;
    font-size: 1.6rem;
    padding: 0;
    margin: 0;
    word-break: keep-all;
    font-family: "GmarketSans", sans-serif;
    font-weight: 400;
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

  &::-webkit-scrollbar {
    width: 1rem;
    height: 0.8rem;
    background-color: white;
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${color.grey01};
    border-radius: 1rem;
    height: 0.8rem;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
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
