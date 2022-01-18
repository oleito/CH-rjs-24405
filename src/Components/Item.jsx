import React from "react";

export default function Item(props) {
  return (
    <>
      <h5>{props.item.title}</h5>
      <div>{props.item.description}</div>
      <div>{props.item.price}</div>
      <div>{props.item.stock}</div>
    </>
  );
}
