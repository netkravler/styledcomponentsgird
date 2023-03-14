import React from "react";
import styled from "styled-components";
import ContentWrapper from "../../Styles/Wrappers/ContentWrapper";

const Header = () => {
  return (
    <StyledHeader>
      <ContentWrapper as="header">Header</ContentWrapper>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  min-height: 100px;
  z-index: 20;
`;
