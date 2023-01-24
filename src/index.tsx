import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import App from "./App";

const GlobalStyle = createGlobalStyle`
  ${reset}
  li {
    list-style: none;
  }
  a {
    text-decoration : none;
    color : inherit;
  }

  button {
    border : none;
    cursor : pointer;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-size: 12px;
  }

  img {
    width: 100%;
    height: auto;
  }

  button {
    border: none;
    cursor: pointer;
    padding: 0;
    background-color: inherit;
  }

  input {
    &:focus {
      outline: none;
      border: none;
    }
  }

  textarea {
    border: none;
    overflow: auto;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none; 
  }

  .ir {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  }

  :root {
    --main-color: #E48254;
    --main-title-color: #444444;
    --sub-text-b: #333333;
    --sub-text-g: #9E9E9E;
    --warning-color: #E26F6B;
    --bg-color: #FFFFFF;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
