import React from "react";
import styled from "styled-components";

const MainTemplate = ({ children }) => {
  return <StyledGridAreas>{children}</StyledGridAreas>;
};

export default MainTemplate;

const StyledGridAreas = styled.section`
  color: #fff;
  display: grid;

  grid-template-columns: 1fr;
  grid-template-areas:
    "A"
    "B"
    "E"
    "D";
  > :nth-child(3) {
    display: none;
  }

  @media all and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-template-areas:
      "A A A A"
      "B . C C"
      "B . C C"
      "D D E E"
      "D D E E";
    > :nth-child(3) {
      display: block;
    }
  }

  > :nth-child(1) {
    grid-area: A;
    background-color: blue;
  }
  > :nth-child(2) {
    grid-area: B;
    background-color: #1eff00;
  }

  > :nth-child(3) {
    grid-area: C;
    background-color: #5c224d;
    width: 100%;
  }

  > :nth-child(4) {
    grid-area: D;
    background-color: #084860;
  }

  > :nth-child(5) {
    grid-area: E;
    background-color: #ff006a;
  }
`;
