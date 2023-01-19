import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

import './Cart.css';
const CartWidget = ({valor}) => {
    return (
        <>
    <FontAwesomeIcon ClassName="Cart" icon={faCartShopping}/> <span> {valor}</span>
    </> 
    );
}

export default CartWidget