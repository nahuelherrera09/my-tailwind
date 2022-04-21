import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import customFetch from "../utils/customFetch";

const { products } = require('../utils/products');

const ItemListContainer = () => {
    
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();



    useEffect(() => {
        customFetch(2000,products.filter(item => {
            if (idCategory === undefined) return item;
            return item.categoryId  === parseInt(idCategory)
        }))
            .then (result => setDatos(result))
            .catch (err => console.log(err))
    },[datos]);
    

    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);

    return (
        <>
            <ItemList items = {datos}/>
            
        </>
    )
}

export default ItemListContainer  