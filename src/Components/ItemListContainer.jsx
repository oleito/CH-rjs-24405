import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

export default function ItemListContainer(props) {
  function onAdd() {
    console.log("Item added");
  }
  let ItemListJson = [
    {
      id: "mb-45",
      title: "Titulo de prueba",
      description: "Descripcion del producto",
      price: 123.45,
      stock: 23,
      pictureUrl: "https://picsum.photos/id/176/300/360",
    },
    {
      id: "mb-48",
      title: "Titulo de prueba 2",
      description: "Descripcion del segundo producto",
      price: 678.9,
      stock: 17,
      pictureUrl: "https://picsum.photos/id/217/300/360",
    },
  ];

  const [itemList, setItemList] = useState([]);

  const obtenerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ItemListJson);
    }, 2000);
  });

  useEffect(() => {
    obtenerProductos.then((res) => {
      setItemList(res);
    });
  });

  return (
    <>
      <h3> {props.greeting} </h3>
      {/* <ItemCount stock={0} initial={1} onAdd={onAdd} /> */}
      <ItemList itemList={itemList} />
    </>
  );
}
