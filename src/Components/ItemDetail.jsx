import React from "react";
import { Button } from "react-bootstrap";

export default function ItemDetail({ item }) {
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
                        <Button variant="outline-primary" size="sm">
                            Comprar
                        </Button>
                    </div>
                </div>
            ) : (
                <div>No hay items aun...</div>
            )
            }
        </>
    );
}
