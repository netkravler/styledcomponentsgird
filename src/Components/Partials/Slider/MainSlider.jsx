import React from "react";
import styled from "styled-components";

const MainSlider = () => {
  return <StyledSlider>MainSlider</StyledSlider>;
};

export default MainSlider;

const StyledSlider = styled.div`
  position: absolute;
  background-color: purple;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 0;
`;
