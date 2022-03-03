import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { cartContext } from "../context/cartContext";
import { Table } from "react-bootstrap";
import { useState } from "react";


export default function Cart() {

    const { cartList } = useContext(cartContext);
    const { cartTotal } = useContext(cartContext);
    const { incrementItemQuantity } = useContext(cartContext);
    const { decrementItemQuantity } = useContext(cartContext);
    const { removeItem } = useContext(cartContext);


    function itemTotalCalc(item) {
        return Number((item.quantity * item.price).toFixed(2));
    }


    return (
        <>
            <h5>Total: ${cartTotal}</h5>
            {cartList.length > 0 ?
                (
                    <div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Descripcion</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartList.map(item => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.description}</td>
                                                <td>{item.price}</td>
                                                <td>{item.quantity}</td>
                                                <td>{itemTotalCalc(item)}</td>
                                                <td>
                                                    <Button variant="danger" onClick={() => { removeItem(item); }} size="sm">Remover</Button></td>
                                            </tr>
                                        </>
                                    )
                                })}
                            </tbody>
                        </Table>
                        <Button variant="outline-primary" size="sm">
                            <Link to={`/formulario`}>
                                Finalizar compra
                            </Link>
                        </Button>
                    </div>
                )
                :
                (
                    <p>
                        No se encontraron items
                    </p>
                )}

        </>
    );
}




