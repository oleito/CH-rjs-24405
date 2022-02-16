import { useState, useEffect } from "react";
import React from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore } from '../firebase/firebase'


export default function ItemDetailContainer(props) {
    const [item, setItem] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        const db = getFirestore();

        const itemCollection = db.collection("items");
        const item = itemCollection.doc(itemId);

        item.get().then((doc) => {
            if (!doc.exists) {
                console.log("No hay registros");
                return;
            }
            setItem({ id: doc.id, ...doc.data() });
        }).catch((error) => {
            console.log(error);
        })
    }, [itemId]);

    return (
        <>
            <h3> {props.greeting} </h3>
            <ItemDetail item={item} />
        </>
    );
}
