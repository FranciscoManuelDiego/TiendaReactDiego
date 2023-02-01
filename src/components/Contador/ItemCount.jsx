import {  useState } from "react"
import Button from 'react-bootstrap/Button';
// import getProducts from "../Products/Products";
import './counter.css'
const Contador = ({inicio , stock, onAdd}) => {
    const [contador, setContador] = useState(inicio);

    const Sumar = () => {
        setContador( contador +1);
    }

    const Restar = () => {
        setContador( contador -1);
    }

    return(
        <>
            <div>
                <Button variant="primary" disabled={contador <= 1} onClick={Restar}>-</Button>
                <span>{'  ' +contador+'  '}</span>
                <Button variant="primary" disabled={contador >= stock} onClick={Sumar}>+</Button>
            </div>
            <Button className="ButtonCarrito" variant="primary" disabled={contador <= 0 } onClick={() => onAdd(contador)}>Agregar al carrito</Button>
        </>
    );
}

export default Contador;