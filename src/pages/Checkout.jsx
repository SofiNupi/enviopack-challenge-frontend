import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useCart } from '../hooks/useCart';
import { useUser } from '../hooks/useUser';
import { useNavigate } from 'react-router';
import Wrapper from '../components/Wrapper';
import Button from '../components/Button';
import ItemWrapper from '../components/ItemWrapper';

const buyStates = {
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR'
}

const StyledItemWrapper = styled(ItemWrapper)`
    flex-direction: column;
    font-weight: normal;
    gap: 10px;
    width: 50%;
    margin: auto;
`;

export default function Checkout () {

    const navigate = useNavigate();

    const { totalPrice, emptyCart } = useCart();
    const { credit, updateCredit } = useUser();

    const [buyState, setBuyState] = useState('');

    useEffect(() => {
        if (credit >= totalPrice && totalPrice > 0 ) {
            setBuyState(buyStates.SUCCESS)
            updateCredit(totalPrice)
            emptyCart()
        } else {
            setBuyState(buyStates.ERROR)
        }
    }, [])
    return (
        <Wrapper>
            <h1> Estado de la compra </h1>

            {buyState === buyStates.SUCCESS && 
                <StyledItemWrapper>
                    La compra se realizó con éxito
                    <Button onClick={() => navigate('/')}> Volver al catálogo </Button>
                </StyledItemWrapper>
            }

            {buyState === buyStates.ERROR && 
                <StyledItemWrapper>
                    Ocurrió un error con la compra, revisa que el importe no supere el crédito disponible en tu cuenta
                    <Button onClick={() => navigate('/carrito')}> Volver al carrito </Button>
                </StyledItemWrapper>
            }
        </Wrapper>
    )
}