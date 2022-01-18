import React from "react";
import Item from "./Item";

export default function ItemList(props) {
  return (
    <>
      <div className="d-flex">
        {props.itemList.map((item) => {
          return <Item item={item} />;
        })}
      </div>
    </>
  );
}
