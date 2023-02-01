// import getProducts from "../Products/Products";
import { useEffect, useState } from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
const ItemDetailContainer = () => {
    const[products, setProducts]= useState({})
    const {id} = useParams()

    useEffect(() => {
        const queryDataBase = getFirestore();
        const queryDoc = doc(queryDataBase, 'Products', id)

        getDoc(queryDoc)
        .then(res => {
            setProducts({ id: res.id , ...res.data()})
        })
    }, )

    // useEffect(() =>{
    //     getProducts
    //     .then((resp)=> setProducts(resp.find(item => item.id === parseInt(id))))
    //     .catch((err) => console.log(err))
    // }, [id])
    
    return (
        <ItemDetail products={products}></ItemDetail>
    );
}

export default ItemDetailContainer;