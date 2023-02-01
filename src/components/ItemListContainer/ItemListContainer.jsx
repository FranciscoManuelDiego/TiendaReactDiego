
// import getProducts from "../Products/Products";
import { useEffect, useState } from 'react';
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {getFirestore , getDocs, collection, query, where } from "firebase/firestore";
const ItemListContainer = () => {

    // Aqui lo que hago es recibir esa data traida desde firebase como una promesa que luego es mapeada

    const[products, setProducts]= useState([])
    const {categoria} = useParams();
    
    useEffect(() => {

        const dataFirestore = getFirestore()
        const queryCollection = collection(dataFirestore , 'Products')

        if(categoria) {
            const viewQuery = query(queryCollection, where('categoria', "==", categoria))
                    // Aqui lo que hago es realizar un filtrado con las herramientas que me da firebase
            getDocs(viewQuery)
            .then((response) => {
                const data = response.docs.map((doc) => {
                    return {id: doc.id , ...doc.data()}
                })
                setProducts(data)
            })
        } else {
            getDocs(queryCollection)
            .then((response) => {
                const data = response.docs.map((doc) => {
                    return {id: doc.id , ...doc.data()}
                })
                setProducts(data)
            })
                    // Aqui lo que hago es recibir esa data traida desde firebase como una promesa que luego es mapeada
        }
    })




    // useEffect(() => {
    //     if(categoria) {
    //         getProducts.then(res => setProducts(res.filter(producto => producto.categoria === categoria)))
    //     } else {
    //         getProducts.then(res => setProducts(res))
    //     }
    // })

    return (
        <>
            <ItemList  producto={products}/>
        </>
    );
};

export default ItemListContainer;