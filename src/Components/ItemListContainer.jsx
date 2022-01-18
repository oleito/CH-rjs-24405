import React from "react";
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
      pictureUrl: "https://via.placeholder.com/200x300",
    },
    {
      id: "mb-48",
      title: "Titulo de prueba 2",
      description: "Descripcion del segundo producto",
      price: 678.9,
      pictureUrl: "https://via.placeholder.com/200x300",
    },
  ];
  return (
    <>
      <h3> {props.greeting} </h3>
      {/* <ItemCount stock={0} initial={1} onAdd={onAdd} /> */}
      <ItemList list={ItemListJson} />
    </>
  );
}
