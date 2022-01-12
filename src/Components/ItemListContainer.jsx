import React from "react";
import ItemCount from "./ItemCount";

export default function ItemListContainer(props) {
  function onAdd() {
    console.log("Item added");
  }
  return (
    <>
      <h3> {props.greeting} </h3>
      <ItemCount stock={0} initial={1} onAdd={onAdd} />
    </>
  );
}
