import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import './item.css'
const Item = ({producto, img}) => {
    return (
        <div className='ItemRow'>
        <Card style={{ width: '25rem' }} className="Item">
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    <Card.Body>
        <Card.Title><li>{producto.marca}</li> </Card.Title>
        <Card.Text>
            <img src={producto.img} alt={producto.marca}/>
            <li>Precio: {producto.precio} AR$</li>
            <li>Stock: {producto.stock}</li>
            <li>{producto.descripcion}</li>
            <Link to={`/item/${producto.id}`} >
                <Button variant="primary">Ver Más</Button>
            </Link>
        </Card.Text>
    </Card.Body>
    </Card>
        </div>
    );
}

export default Item; 