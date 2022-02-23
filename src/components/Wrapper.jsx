import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
    max-width: 800px;
    margin: auto;
`;

export default function Wrapper({ children }) {
  return <StyledWrapper>{children}</StyledWrapper>;
}
