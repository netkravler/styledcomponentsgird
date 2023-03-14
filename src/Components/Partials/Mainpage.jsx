import React, { useEffect } from "react";
import styled from "styled-components";
import ContentWrapper from "../../Styles/Wrappers/ContentWrapper";
import Sidebar from "./Sidebar";

const Mainpage = ({ showSidebar, title, description, children }) => {
  useEffect(() => {
    document.title = title;
  }, [title, description]);

  return (
    <StyledMain>
      <ContentWrapper>
        <MainWrapper>
          {!showSidebar && <Sidebar />}
          {children}
        </MainWrapper>
      </ContentWrapper>
    </StyledMain>
  );
};

export default Mainpage;
const StyledMain = styled.main`
  align-self: start;
  background-color: orange;
  z-index: 30;
`;

const MainWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 6fr;
`;
