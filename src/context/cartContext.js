import React, { createContext, useState, useEffect } from "react";


export const cartContext = createContext();

export default function CartContext({ children }) {
    const [cartList, setCartList] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        console.log(cartList);
        itemTotalCalc();
    }, [cartList]);

    function addItem(item) {
        if (isInCart(item)) {
            let oldItem = cartList.find(c => c.id.toString() === item.id.toString());
            let oldCartList = cartList.filter(c => c.id.toString() !== item.id.toString());
            let newItem = oldItem;
            let newQuantity = oldItem.quantity + item.quantity;
            newItem.quantity = newQuantity;
            setCartList([newItem, ...oldCartList]);
        } else {
            setCartList([...cartList, item]);
        }
    }

    function incrementItemQuantity(item) {

    }
    function decrementItemQuantity(item) {

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

    function itemTotalCalc() {
        let total = 0;
        let count = 0;
        if (cartList.length > 0) {

            cartList.forEach(el => {
                let subtotal = el.price * el.quantity
                total += subtotal;
                count += el.quantity
            });
        }
        setCartTotal(total);
        setCartCount(count);
    }

    return (
        <>
            <cartContext.Provider value={{ cartList, cartCount, addItem, removeItem, clearCart, isInCart, incrementItemQuantity, decrementItemQuantity, cartTotal }}>
                {children}
            </cartContext.Provider>
        </>
    );
}