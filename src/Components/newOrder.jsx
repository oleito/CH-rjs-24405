import React, { useContext, useState, useRef } from "react";
import { getFirestore } from '../firebase/firebase'
import { Form, Row, InputGroup, Button, Col } from "react-bootstrap";
import { cartContext } from "../context/cartContext";
import firebase from "firebase";

export default function NewOrder(props) {

    const { cartList, cartTotal, clearCart } = useContext(cartContext);

    const [validated, setValidated] = useState(false);

    const nameRef = useRef();
    const lastNameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();

    const confirmOrder = (e) => {
        e.preventDefault();
        const db = getFirestore();
        const orders = db.collection("orders");

        let newOrder = {
            buyer: {
                nombre: nameRef.current.value,
                lastName: lastNameRef.current.value,
                phone: phoneRef.current.value,
                email: emailRef.current.value,
                address: addressRef.current.value,
            },
            items: cartList,

            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: cartTotal,
        }

        orders.add(newOrder).then(({ id }) => {
            console.log(id);
            cartList.map((e) => {
                const docRef = db.collection("items").doc(e.id);
                docRef.update({ stock: firebase.firestore.FieldValue.increment(-e.cantidad) }).catch((err) => {
                    console.log(err);
                });
            });
            clearCart()
        }).catch(err => {
            console.log(err);
        })
        setValidated(true);
    }

    return (
        <>{cartList.length < 1 ? (<p>El carrito no tiene items para comprar... </p>) : (<Form noValidate validated={validated} onSubmit={(e) => confirmOrder(e)}>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="nameValidation">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        ref={nameRef}
                        required
                        type="text"
                        placeholder="Nombre"
                    />
                    <Form.Control.Feedback>Dato correcto</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="lastNameValidation">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        ref={lastNameRef}
                        required
                        type="text"
                        placeholder="Apellido"
                    />
                    <Form.Control.Feedback>Dato correcto</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="phoneValidation">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control
                        ref={phoneRef}
                        required
                        type="text"
                        placeholder="Telefono"
                    />
                    <Form.Control.Feedback>Dato correcto</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="addressValidation">
                    <Form.Label>Direccion</Form.Label>
                    <Form.Control
                        ref={addressRef}
                        required
                        type="text"
                        placeholder="Direccion"
                    />
                    <Form.Control.Feedback>Dato correcto</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="emailValidation">
                    <Form.Label>Email</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                        <Form.Control
                            ref={emailRef}
                            type="email"
                            placeholder="Email"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Debe ingresar un mail valido.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>
            <Button type="submit">Confirmar pedido</Button>
        </Form>)}
        </>
    )
}
