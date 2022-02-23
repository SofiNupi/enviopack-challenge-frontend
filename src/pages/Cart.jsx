import React from "react";
import styled from "styled-components";
import { useCart } from "../hooks/useCart";
import pictureImage from "../images/image-product.jpg";
import { useNavigate } from "react-router";
import Button from "../components/Button";
import Wrapper from "../components/Wrapper";
import ItemWrapper from "../components/ItemWrapper";

const Image = styled.img`
  height: 70px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


const ProductData = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    background: #deeaf3;
    border-radius: 13px;
    font-weight: normal;
`;

const AlignCenter = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

const CloseButton = styled.button`
    background: black;
    padding: 10px;
    color: white;
    border: none;
    border-radius: 7px;
    margin: 10px;
    cursor: pointer;
`;

export default function Cart() {
  const navigate = useNavigate();
  const { productsInCart, totalPrice, removeProductFromCart } = useCart();
  return (
    <Wrapper>
      <h1> Carrito </h1>

      {productsInCart.map(product => (
        <ItemWrapper>
          <ProductData>
            <AlignCenter>
              <Image src={pictureImage} alt="imagen de producto" />
              <p>{product.title} </p>
            </AlignCenter>
            <AlignCenter>
              <p>$ {product.price} </p>
              <CloseButton onClick={() => removeProductFromCart(product)}>
                {" "}
                X{" "}
              </CloseButton>
            </AlignCenter>
          </ProductData>
        </ItemWrapper>
      ))}

      <ItemWrapper>
        {productsInCart.length > 0 ? (
          <>
            <p> Total </p>
            <p>${totalPrice}</p>
          </>
        ) : (
          <div> No hay productos </div>
        )}
      </ItemWrapper>

      <ButtonsWrapper>
        <Button onClick={() => navigate("/")}> Volver al catálogo </Button>
        <Button
          disabled={productsInCart.length === 0}
          onClick={() => navigate("/checkout")}
        >
          {" "}
          Finalizar compra{" "}
        </Button>
      </ButtonsWrapper>
    </Wrapper>
  );
}
