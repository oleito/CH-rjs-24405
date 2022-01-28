import React from "react";
import { Button } from "react-bootstrap";


export default function ItemDetail({ item }) {
    console.log(item);
    return (
        <>
            {item ? (
                <div className="d-flex">
                    <div className="d-flex flex-column">
                        <img className="img img-fluid" src={item.pictureUrl} alt="" />
                    </div>
                    <div className="d-flex flex-column">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                        <p>$ {item.price}</p>
                        <Button variant="outline-primary" size="sm">
                            Comprar
                        </Button>

                    </div>

                </div>
            ) : (
                <div>Cargando...</div>
            )
            }
        </>
    );
}
