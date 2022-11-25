import React from "react";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function CartWidget() {
    return (
        <Button variant="primary" className="btnCarrito position-absolute end-0" >
            <img src="images/cart.svg" alt="Carrito" width="32" /><Badge bg="danger">1</Badge>
            <span className="visually-hidden">unread messages</span>
        </Button>
    )
}

export default CartWidget;