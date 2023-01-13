import Item from "../Item/Item";
import './Items.css'
const ItemList = ({producto}) => {
        return (
        <ul key={producto.id}  className="Items" >
        {producto.map(producto => (
                <Item producto={producto}/>
        ))}
        </ul> 
        );
}

export default ItemList