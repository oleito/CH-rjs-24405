import React from "react";
import { Button } from "react-bootstrap";

export default function Item(props) {
  return (
    <>
      <div className="item-card">
        <div className="item-header">{props.item.title}</div>
        <div className="item-img">
          <img className="img img-fluid" src={props.item.pictureUrl} alt="" />
        </div>
        <div className="item-description">{props.item.description}</div>
        <Button variant="outline-primary" size="sm">
          Ver detalle del producto
        </Button>
        <div className="item-price">$ {props.item.price}</div>
        <div className="item-stock">Stock: {props.item.stock}</div>
      </div>
    </>
  );
}
