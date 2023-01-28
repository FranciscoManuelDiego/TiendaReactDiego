import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useState ,useEffect } from 'react';
import { Button } from 'react-bootstrap';
import CloseButton from 'react-bootstrap/CloseButton';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card'
import "./cart.css"

import "./cart.css"
const Cart = () => {
    const [precioTotal, setPrecioTotal] = useState(0)
    const {cart, LimpiarItems, removerProducto} = useContext(CartContext)
    
    useEffect(() => {
        setPrecioTotal(cart?.reduce((previo, actual) => {
            return previo + actual.precio * actual.cantidad
        }, 0))
    }, [cart])

    const [show, setShow] = useState(true);

    const Alerta = () => {
        alert("Compraste tus productos!🤗")
    }

        if(cart.length === 0 ) {
            if (show) {
                return (
                    <Alert className="Alert" variant="danger" onClose={() => setShow(false)} dismissible>
                        <Alert.Heading> <h1>No hay productos en tu carrito! 😬</h1></Alert.Heading>
                        <p>
                            Agrega productos y seran aqui mostrados!
                        </p>
                    </Alert>
                    )
            }
            return <Button className='ButtonAlert' onClick={() => setShow(true)}>Mostrar Alerta</Button>;
        }
        // Aca yo estaba tratando de hacer la condicion con [], pero lo que ocurre es que JS no compara un array vacio con otro array vacio
        // Yo al querer comparar esta condicion [] === [] serian dos array distintos. En esta propiedad length = 0 me dice que no hay ningun
        // objeto en el array.
        
return (
    <>
    {cart.map((producto) => (
    <Card style={{ width: '30rem' }} className='cart' key={producto.id}>
    <Card.Body>
    <CloseButton className='CloseButton' onClick={() => removerProducto(producto.id)}/>
        <Card.Title> {producto.nombre}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Producto: {producto.categoria}</Card.Subtitle>
        <img alt={producto.nombre} src={producto.img}></img>
        <Card.Text>
        <p> Cantidad: {producto.cantidad}</p>
        <p> Precio: {producto.cantidad * producto.precio}</p>
        </Card.Text>
    </Card.Body>
    </Card>
    ))}
        <div className='CartText'> 
            <p> Precio Total: {precioTotal}</p>
            <Button className='CartButtons' variant="primary" onClick={LimpiarItems}> Remover Productos</Button>
            <Button className='CartButtons' variant="primary" onClick={() => {LimpiarItems(); Alerta()}}>Finalizar Compra</Button>
        </div>
    </>
);
}

export default Cart