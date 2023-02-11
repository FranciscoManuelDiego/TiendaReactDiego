import Card from 'react-bootstrap/Card';
import Contador from "../Contador/ItemCount";
import './item.css'
import { useState, } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartProvider';

const ItemDetail = ({products}) => {
    const [irCarrito , setIrCarrito] =useState(false)

    const {agregarItem} = useCartContext();

    const onAdd = (cantidad) => {
        // console.log(cantidad)
        setIrCarrito(true)
        agregarItem(products, cantidad)
    }

        return (
            // <div className='ItemRow'>
            <Card  className="Item">
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
            <Card.Title><span>{products.marca}</span> </Card.Title>
            <Card.Text>
                <img src={products.img} alt="Producto"/>
                <p>Precio: {products.precio} AR$</p>
                <p>Stock: {products.stock}</p>
            </Card.Text>
            {
                        irCarrito 
                        ? <Link to="/cart">Ir al carrito</Link>
                        :<Contador inicio={0} stock={products.stock} onAdd={onAdd} />
            }
        </Card.Body>
        </Card>
            // </div>
        );
}

export default ItemDetail