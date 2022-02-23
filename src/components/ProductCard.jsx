import React from 'react';
import styled from 'styled-components';
import pictureImage from '../images/image-product.jpg'
import { useCart } from '../hooks/useCart';
import { useNavigate } from 'react-router';
import Button from './Button';

const Image = styled.img`
    width: 150px;
    align-self: center;
`;

const CartWrapper = styled.div`
    border: 1px solid #959595;
    border-radius: 8px;
    padding: 13px;
    box-shadow: 1px 2px 5px grey;
    display: flex;
    flex-direction: column;
`;

export default function ProductCard ({ product }) {


    const navigate = useNavigate();
    const { addProductInCart, isProductInCart} = useCart();
    return (
    <CartWrapper>
        <Image src={pictureImage} alt="imagen de producto"/>
        <h3> {product.title} </h3>
        <p> $ {product.price} </p>
        {isProductInCart(product) ?
            <Button onClick={() => navigate('/carrito')}> Ver Carrito </Button>
        :
            <Button onClick={() => addProductInCart(product)}> Agregar al carrito </Button>
        
        }
    </CartWrapper>
    )
}