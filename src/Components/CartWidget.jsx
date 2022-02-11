import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { cartContext } from "../context/cartContext";

export default function CartWidget() {

  const { cartCount } = useContext(cartContext);

  return (
    <>
      <div style={{ display: "flex" }}>
        <FontAwesomeIcon
          icon={faCartShopping}
          style={{ marginTop: "8px", color: "#fff" }}
        />
        <div style={{ marginLeft: "5px", marginTop: "-4px", color: "white" }}>
          {cartCount}
        </div>
      </div>
    </>
  );
}
