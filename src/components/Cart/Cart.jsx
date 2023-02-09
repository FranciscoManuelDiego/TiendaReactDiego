import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useState ,useEffect } from 'react';
import { Button, Form, CloseButton, Alert, Card } from 'react-bootstrap';
import {getFirestore, 
        collection,
        addDoc,
        // doc,
        // updateDoc
    } from "firebase/firestore";
import "./cart.css"
// import { clear } from '@testing-library/user-event/dist/clear';

const Cart = () => {
    const [precioTotal, setPrecioTotal] = useState(0)
    const {cart, LimpiarItems, removerProducto} = useContext(CartContext)
    const [order, setOrder] = useState({})
    const [show, setShow] = useState(true);
    const [formValue , setFormValue] = useState({
        name: '',
        mail: '',
    })
    
        useEffect(() =>{
            setOrder({
            comprador: {
                name: 'x',
                email: 'x',
            },
            items: cart.map((product) => { 
                const {nombre, precio, id} = product
                return {nombre, precio, id}
            }),
            precio: cart.reduce((previo, actual) => {
                return previo + actual.precio * actual.cantidad }, 0)
            });
        }, [cart])


    const handleInput = (event) => {
        setFormValue({
            ...formValue , 
            [event.target.name] : event.target.value,
            [event.target.mail] : event.target.value,
        }) 
    }
    // Aqui obtengo la informacion de mi campo de datos

    const database = getFirestore();
    // const batch = writeBatch(database);
    useEffect(() => {
        setPrecioTotal(cart?.reduce((previo, actual) => {
            return previo + actual.precio * actual.cantidad
        }, 0))
    }, [cart])

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
        

        // Aqui invoco mis datos del carrito junto con un effect

        const crearOrden = (event) => {
            // event.preventDefault()
            const querySnapshot = collection (database , "ordenes");

            const ordenActual = {
                ...order,
                comprador: formValue,
            }
            
            addDoc(querySnapshot, ordenActual)
            .then((response) =>{
                alert("Orden creada!" + response.id)
                // actualizarStock()
            })
            .catch((error) => {
                console.log(error)
            })
        }
        // Aqui creo la orden!

        // const actualizarStock = () => {
        //     cart.forEach((product)=> {
        //         const querySnapshot = doc(database , "Products", product.id)
        //         updateDoc(querySnapshot , {
        //             stock: product.stock - product.cantidad
        //         })
        //         .then((res)=> {
        //             console.log(res)
        //             console.log("Se actualizo tu stock!")
        //         })
        //         .catch((err)=> console.log(err))
        //     })
            // cart.forEach((product) => {
            //     const querySnapshot = doc(database, "Products", product.id);
            //     batch.update(querySnapshot, {stock: product.stock - product.quantity});
            //     batch.commit();
            // })
        //     clear()
        // }

        // Aqui hago la logica del descuento de stock!

        const alertaCompra = () => {
            alert("Compraste tus productos! 😁")
        }
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
        <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Nombre</Form.Label>
            <Form.Control name="name" type="text" placeholder="Escribe tu Nombre" value={formValue.name} onChange={handleInput}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control name="mail" type="email" placeholder="Escribe tu Mail" value={formValue.mail} onChange={handleInput} />
        </Form.Group>
    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
        Submit
      </Button> */}
        </Form>
            <p> Precio Total: {precioTotal}</p>
            <Button className='CartButtons' variant="primary" onClick={LimpiarItems}> Remover Productos</Button>
            <Button className='CartButtons' variant="primary" onClick={() => {LimpiarItems(); alertaCompra(); crearOrden(); }}>Finalizar Compra</Button>
        </div>
    </>
);
}

export default Cart