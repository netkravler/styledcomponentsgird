import React from "react";
import styled from "styled-components";

const Gridsection = ({ size, auto, children }) => {
  return (
    <StyledAuto auto={auto} size={size}>
      {children}
    </StyledAuto>
  );
};

export default Gridsection;

const StyledAuto = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ auto }) => auto || "auto-fit"}, minmax(${({ size }) => size || "250px"}, 1fr));
  gap: 1rem;
`;
