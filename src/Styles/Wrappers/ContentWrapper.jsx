import React from "react";
import styled from "styled-components";

const ContentWrapper = ({ as, children }) => {
  return (
    <StyledContent as={as}>
      <SpacingWrapper>{children}</SpacingWrapper>
    </StyledContent>
  );
};

export default ContentWrapper;

const StyledContent = styled.main`
  margin: auto;
  width: 100%;
  max-width: 1280px;
  background-color: deeppink;
`;

const SpacingWrapper = styled.div`
  margin: 1rem;
  //background-color: yellow;
`;
