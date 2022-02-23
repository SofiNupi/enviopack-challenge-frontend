import React from 'react';
import styled from 'styled-components';

const StyledItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 20px;
  border: 1px solid gray;
  border-radius: 6px;
  margin: 10px 0;
  font-weight: bold;
  box-shadow: 1px 2px 5px grey;

  p {
    margin: 0;
  }
`;

export default function ItemWrapper ({children, ...rest}) {
    return (
        <StyledItemWrapper {...rest}>
            {children}
        </StyledItemWrapper>
    )
}