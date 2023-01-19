import Item from "../Item/Item";
import './Items.css'
const ItemList = ({producto}) => {
        return (
        <ul className="Items" >
        {producto.map(producto => (
                <Item key={producto.id} producto={producto}/>
        ))}
        </ul> 
        );
}

export default ItemList