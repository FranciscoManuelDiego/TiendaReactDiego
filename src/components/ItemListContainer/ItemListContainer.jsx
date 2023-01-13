
import getProducts from "../Products/Products";
import { useEffect, useState } from 'react';
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
const ItemListContainer = () => {
    const[products, setProducts]= useState([])

    const {categoria} = useParams();
    useEffect(() =>{
    getProducts
    .then((resp)=> setProducts(resp))
    if(categoria) {
        const filtradoProductos = products.filter((product) => product.categoria === categoria);
        setProducts(filtradoProductos)
    } else {
        getProducts.then((resp)=> setProducts(resp))
    }
    getProducts.catch((err) => console.log(err))
}, [products, categoria])

    // useEffect(() => {
    // const filtradoProductos = products.filter((product) => product.categoria === categoria);
    // setProducts(filtradoProductos)
    // }, [products, categoria])

    return (
        <>
            <ItemList  producto={products}/>
        </>
    );
};

export default ItemListContainer;