import { useEffect , useState } from "react"
// import getProducts from "../Products/Products";
import './counter.css'
const Contador = (producto) => {
    const [contador, setContador] = useState(0);

//     const[singleStock, setSingleStock]= useState([])

//     useEffect(() =>{
//     getProducts
//     .then((resp)=> setSingleStock(resp))
//     .catch((err) => console.log(err))
// }, [])

    // const stock = singleStock.map(id => (id.stock))

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
        <span> Stock de un producto Hardcodeado: {StockTotal}</span>
        {/* <span>{stock}</span> */}
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