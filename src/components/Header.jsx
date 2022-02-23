import React from 'react';
import styled from 'styled-components';
import { useCart } from '../hooks/useCart';
import { useUser } from '../hooks/useUser';
import { useNavigate } from 'react-router';

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background: #2a2a2a;
    color: white;
    padding: 15px 12px;
`;


const DataWrapper = styled.div`
    display: flex;
    gap: 15px;
`;

const LinkButton = styled.button`
    border:none;
    background: none;
    cursor: pointer;
    color: inherit;
    font-size: inherit;
    font-weight: bold;
`;

export default function Header ({}) {

    const { productsInCart } = useCart();
    const { firstName, credit } = useUser();

    const navigate = useNavigate();

    return (
        <HeaderWrapper>
            <LinkButton onClick={() => navigate('/')}>
                Tienda de productos
            </LinkButton>
            <DataWrapper>
                <div>
                    {firstName} 

                </div>
                <LinkButton onClick={() => navigate('/carrito')}>
                    Carrito({productsInCart.length})

                </LinkButton>
                <div> 
                    Crédito
                    ${credit}

                </div>

            </DataWrapper>
        </HeaderWrapper>
    )
}