import getProducts from "../Products/Products";
import { useEffect, useState } from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const[products, setProducts]= useState({})
    const {id} = useParams()
    console.log()
    useEffect(() =>{
        getProducts
        .then((resp)=> setProducts(resp.find(item => item.id === parseInt(id))))
        .catch((err) => console.log(err))
    }, [id])
    
    return (
        <ItemDetail products={products}></ItemDetail>
    );
}

export default ItemDetailContainer;