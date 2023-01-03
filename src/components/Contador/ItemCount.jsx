import { useState } from "react"
import './counter.css'
const Contador = () => {
    const [contador, setContador] = useState(0);
    const StockTotal = 10;

    const Sumar = () => {
        if( contador < StockTotal)
        setContador( contador +1);
    }

    const Restar = () => {
        if (contador > 0 )
        setContador( contador -1);
    }

    return(
        <>
        <span> Stock: {StockTotal}</span>
            <div>
                <button onClick={Restar}>-</button>
                <span>{'  ' +contador+'  '}</span>
                <button onClick={Sumar}>+</button>
            </div>
                <button>Agregar al carrito</button>
        </>
    );
}

export default Contador;