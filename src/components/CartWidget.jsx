import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react";
// import { useCartContext } from "../context/CartProvider";
import { useEffect, useState } from "react";
import './Cart.css';
import { CartContext } from "../context/CartContext";
const CartWidget = () => {
    const {cart} = useContext(CartContext)
    const [total, setTotal] = useState()

    useEffect(() => {
        setTotal(cart?.reduce((previo, actual) => {
            return previo + actual.cantidad
        }, 0))
    }, [cart])
// Aqui lo que hace el metodo reduce es devolver un unico valor acumulado dentro de un array, donde toma el parametro cantidad del
// carrito y lo suma, reduce neceista una cantidad establecida en 0 y el parametro o serie de numeros que quiero enviar
    return (
        <>
    <FontAwesomeIcon ClassName="Cart" icon={faCartShopping}/> <span>{total+ " "}</span>
    </> 
    );
}

export default CartWidget