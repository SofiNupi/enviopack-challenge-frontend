import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background: #2a2a2a;
    color: white;
    border: none;
    padding: 6px 20px;
    cursor: pointer;

    &:disabled,
    &[disabled]{
        border: 1px solid #999999;
        background-color: #cccccc;
        color: #666666;
}
`;

export default function Button ({children, onClick, ...rest}) {
    return (
        <StyledButton onClick={onClick} {...rest}>
            {children}
        </StyledButton>
    )
}