import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
      category: "cat1",
      price: 123.45,
      stock: 23,
      pictureUrl: "https://picsum.photos/id/176/300/360",
    },
    {
      id: "mb-48",
      title: "Titulo de prueba 2",
      description: "Descripcion del segundo producto",
      category: "cat2",
      price: 678.9,
      stock: 17,
      pictureUrl: "https://picsum.photos/id/217/300/360",
    },
    {
      id: "mb-58",
      title: "Titulo de prueba 3",
      description: "Descripcion del tercer producto",
      category: "cat3",
      price: 78.9,
      stock: 6,
      pictureUrl: "https://picsum.photos/id/27/300/360",
    },
    {
      id: "mb-83",
      title: "Titulo de prueba 4",
      description: "Descripcion del cuarto producto",
      category: "cat2",
      price: 367.9,
      stock: 9,
      pictureUrl: "https://picsum.photos/id/17/300/360",
    },
  ];

  const [itemList, setItemList] = useState([]);
  const { categoryId } = useParams();

  const obtenerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ItemListJson);
    }, 2000);
  });

  useEffect(() => {
    setItemList([]);
    obtenerProductos.then((res) => {
      if (categoryId) {
        let filtrado = res.filter((item) => {
          return item.category === categoryId
        })
        setItemList(filtrado);
        return
      }
      setItemList(res);
    });
  }, [categoryId]);


  return (
    <>
      <h3> {props.greeting} </h3>
      <ItemList itemList={itemList} />
    </>
  );
}
