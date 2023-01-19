
import getProducts from "../Products/Products";
import { useEffect, useState } from 'react';
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
const ItemListContainer = () => {
    const[products, setProducts]= useState([])

    const {categoria} = useParams();
    
    useEffect(() => {
        if(categoria) {
            getProducts.then(res => setProducts(res.filter(producto => producto.categoria === categoria)))
        } else {
            getProducts.then(res => setProducts(res))
        }
    })
    return (
        <>
            <ItemList  producto={products}/>
        </>
    );
};

export default ItemListContainer;