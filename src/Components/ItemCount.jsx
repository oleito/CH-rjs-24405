import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { cartContext } from "./../context/cartContext";

export default function ItemCount(props) {
  const [count, setCount] = useState(props.stock > 0 ? 1 : props.initial);

  const { addItem } = useContext(cartContext);

  return (
    <>
      <div style={{ width: "auto" }}>
        <div className="d-flex flex-row justify-content-between">
          <Button
            disabled={count < 1}
            onClick={() => {
              setCount(count - 1);
            }}
          >
            -
          </Button>
          <div>{count}</div>
          <Button
            disabled={count >= props.stock}
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </Button>
        </div>
        <div className="d-flex justify-content-center">
          {/* <Button variant="outline-primary" onClick={() => props.onAdd(true)}>
            Agregar al carrito
          </Button> */}
          <Button variant="outline-primary" onClick={() => addItem(props)}>
            Agregar al context
          </Button>
        </div>
      </div>
    </>
  );
}
