import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
}

html, body{
  border: solid 1px red;
  width: 100%;
  min-height: 100%;
}

#root{
  position: relative;
  border: solid 1px blue;
  min-height: 100vh;
  width: 100%;

  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 2rem;
  z-index: 10;
}


`;
