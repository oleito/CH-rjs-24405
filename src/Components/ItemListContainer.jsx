import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { getFirestore } from '../firebase/firebase'

export default function ItemListContainer(props) {
  function onAdd() {
    console.log("Item added");
  }

  const [itemList, setItemList] = useState([]);
  const { categoryId } = useParams();


  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");

    itemCollection.get().then((qs) => {
      if (qs.size === 0) {
        console.log("No hay registros");
      }
      setItemList(qs.docs.map(doc => { return { id: doc.id, ...doc.data() } }));
    }).catch((error) => {
      console.log(error);
    })

  }, [])

  return (
    <>
      <h3> {props.greeting} </h3>
      <ItemList itemList={itemList} />
    </>
  );
}
