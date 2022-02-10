import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom";


export default function ItemDetail({ item }) {

    const [estado, setEstado] = useState(false);
    console.log(item);
    return (
        <>
            {item ? (
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column">
                        <img className="img img-fluid" src={item.pictureUrl} alt="" />
                    </div>
                    <div className="d-flex flex-column" style={{ padding: "20px" }}>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                        <p style={{ marginTop: "auto" }}>$ {item.price}</p>
                        {
                            !estado &&
                            <ItemCount id={item.id} stock={item.stock} initial={1} onAdd={setEstado} ></ItemCount>
                        }
                        <div className="mt-auto">

                            <Button variant="outline-primary" size="sm">
                                <Link to={`/cart`}>
                                    Finalizar compra
                                </Link>
                            </Button>

                        </div>
                    </div>
                </div>
            ) : (
                <div>No hay items aun...</div>
            )
            }
        </>
    );
}
