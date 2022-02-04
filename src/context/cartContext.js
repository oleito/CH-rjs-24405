import React, { createContext, useState } from "react";


export const cartContext = createContext();

export default function CartContext({ children }) {
    const [cartList, setCartList] = useState([]);

    function addItem(item) {
        console.log('item agregado');
        console.log(item);
    }

    function removeItem() { }

    function clearCart() {
        setCartList([]);
    }

    function isInCart() { }

    return (
        <>
            <cartContext.Provider value={{ cartList, addItem, removeItem, clearCart, isInCart }}>
                {children}
            </cartContext.Provider>
        </>
    );
}