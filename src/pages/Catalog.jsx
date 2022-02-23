import React from 'react';
import styled from 'styled-components';

import ProductCard from '../components/ProductCard.jsx';
import UseCatalog from '../hooks/useCatalog.jsx';
import Button from '../components/Button.jsx';
import Wrapper from '../components/Wrapper.jsx';

const ProductWrapper = styled.div`
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(3, 1fr);
`;

const Paginator = styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;
    align-items: center;
`;

const Options = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    align-items: end;
`;

const Input = styled.input`
    width: 190px;
    padding: 7px;
    background: #c7c7c787;
    border: 1px solid #bbbbbb;
`;

const Select = styled.select`
    padding: 7px 20px;
    background: #e1e1e1;
    border: 1px solid #b9b9b9;
`;

const OrderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`;

const Label = styled.label`
    text-transform: uppercase;
    color: #787878;
    font-size: 14px;
`;

export default function Catalog () {

    const { filterByTitle, setOrderBy, productsInPage,  nextPage, previousPage, actualPage, totalPages } = UseCatalog();

    return (
        <Wrapper>
            <h1> Catálogo </h1>

            <Options>
                <div>
                    <Input onChange={(e) => filterByTitle(e.target.value)} placeholder="Buscar productos por nombre" />
                </div>

                <OrderWrapper>
                    <Label htmlFor="order"> Ordenar por </Label>
                    <Select onChange={e => setOrderBy(e.target.value)} id="order">
                        <option value="default" defaultValue  > Seleccionar</option>
                        <option value='min-price'>Más baratos</option>
                        <option value='max-price'>Más caros</option>
                        
                    </Select>
                </OrderWrapper>
            </Options>


            <ProductWrapper>
                {productsInPage.map(product =>  <ProductCard product={product} key={product.id}/> )}

            </ProductWrapper>

            <Paginator>
                <Button disabled={actualPage === 0} onClick={previousPage}> Anterior </Button>
                <p> {actualPage + 1} </p>
                <Button disabled={actualPage >= totalPages } onClick={nextPage}> Siguiente </Button>
            </Paginator>
            
        </Wrapper>
    )
}