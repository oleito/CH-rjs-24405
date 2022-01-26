import { useState, useEffect } from "react";
import React from "react";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer(props) {
    const [item, setItem] = useState(null);

    let ItemJson = {
        id: "mb-85",
        title: "Titulo de prueba",
        description: "Descripcion del producto",
        price: 123.45,
        stock: 23,
        pictureUrl: "https://picsum.photos/id/176/300/360",
    };

    const obtenerProducto = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ItemJson);
        }, 2000);
    });

    const getItem = () => {
        return obtenerProducto;
    }

    useEffect(() => {
        getItem().then((res) => {
            setItem(res);
        });
    }, []);

    return (
        <>
            <h3> {props.greeting} </h3>
            <ItemDetail item={item} />
        </>
    );
}
