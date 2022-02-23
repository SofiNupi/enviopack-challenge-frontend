import React, { useState, useContext, useEffect } from 'react';

export const CartContext = React.createContext();

export function useCart () {
    return useContext(CartContext)
}


export function CartProvider({ children }) {

    const [productsInCart, setProductsInCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    function addProductInCart (product) {
        setProductsInCart([...productsInCart, product])
    }

    function removeProductFromCart (productToRemove) {
        setProductsInCart(productsInCart.filter((product) => product.id !== productToRemove.id));
    }

    function isProductInCart (product) {
        return productsInCart.includes(product)
    }

    function emptyCart () {
        setProductsInCart([])
    }

    useEffect(() => {
        setTotalPrice(productsInCart.reduce((acc, product) => acc + product.price, 0))
    }, [productsInCart])

  return (
    <CartContext.Provider value={{addProductInCart, removeProductFromCart, productsInCart, totalPrice, isProductInCart, emptyCart}}>
        {children}
    </CartContext.Provider>
  )
}