import React, { createContext, useState } from "react";


export const cartContext = createContext();

export default function CartContext({ children }) {
    const [cartList, setCartList] = useState([]);

    function addItem(item) {
        if (isInCart(item)) {
            let oldItem = cartList.find(c => c.id.toString() === item.id.toString());
            let oldCartList = cartList.filter(c => c.id.toString() !== item.id.toString());
            let newItem = oldItem;
            let newQuantity = oldItem.quantity + item.quantity;
            newItem.quantity = newQuantity;
            setCartList([newItem, ...oldCartList]);
        } else {
            setCartList([item, ...cartList]);
        }
        console.log(cartList);
    }

    function removeItem(item) {
        let newCartList = cartList.filter(c => c.id.toString() !== item.id.toString());
        setCartList(newCartList);
    }

    function clearCart() {
        setCartList([]);
    }

    function isInCart(item) {
        return cartList.find(c => c.id.toString() === item.id.toString()) ? true : false;
    }

    return (
        <>
            <cartContext.Provider value={{ cartList, addItem, removeItem, clearCart, isInCart }}>
                {children}
            </cartContext.Provider>
        </>
    );
}