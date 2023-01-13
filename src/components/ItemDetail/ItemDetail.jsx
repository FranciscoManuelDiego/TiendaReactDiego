import Card from 'react-bootstrap/Card';
import Contador from "../Contador/ItemCount";
import './item.css'
const ItemDetail = ({products}) => {
        return (
            <div className='ItemRow'>
            <Card style={{ width: '25rem' }} className="Item">
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
            <Card.Title><span>{products.marca}</span> </Card.Title>
            <Card.Text>
                <p>Precio: {products.precio} AR$</p>
                <p>Stock: {products.stock}</p>
            </Card.Text>
            <Contador/>
        </Card.Body>
        </Card>
            </div>
        );
}

export default ItemDetail