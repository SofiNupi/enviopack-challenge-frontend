import React, { useEffect, useState } from 'react';
import productsMock from '../mocks/products.json';

function orderByMinPrice (arr) {
    const arrCopy = [...arr];
    return arrCopy.sort((a, b) => a.price - b.price)
}

function orderByMaxPrice (arr) {
    const arrCopy = [...arr];
    return arrCopy.sort((a, b) => b.price - a.price)
}

function filterTilteByText (arr, text) {
    return arr.filter((element) =>  (element.title.toLowerCase()).includes(text.toLowerCase()))
 }


export default function UseCatalog() {

    const products = productsMock.productos;
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [orderBy, setOrderBy ] = useState('')
    const [searchByText, setSearchByText ] = useState('')

    const PRODUCTS_PER_PAGE = 6;
    const [productsInPage, setProductsInPage] = useState([])
    const [actualPage, setActualPage] = useState(0);
    const [ totalPages, setTotalPages ] = useState(0);

    useEffect(() => {
        setProductsInPage(filteredProducts.slice(actualPage * PRODUCTS_PER_PAGE, actualPage * PRODUCTS_PER_PAGE + PRODUCTS_PER_PAGE))
        setTotalPages((filteredProducts.length / PRODUCTS_PER_PAGE) - 1)
    }, [filteredProducts, actualPage])

    function nextPage () {
        setActualPage( actualPage + 1)
    }

    function previousPage () {
        setActualPage(actualPage - 1)
    }


    const filterByTitle = (text) => {
        setSearchByText(text)
        setFilteredProducts(filterTilteByText(products, text))
        setActualPage(0)
        
    }

    useEffect(() => {
        orderBy === 'min-price' && setFilteredProducts(orderByMinPrice(filteredProducts))
        orderBy === 'max-price' && setFilteredProducts(orderByMaxPrice(filteredProducts))
    }, [orderBy ,searchByText])
    

    return {
        products, filteredProducts, filterByTitle, setOrderBy, productsInPage, actualPage, totalPages, nextPage, previousPage
    }
}