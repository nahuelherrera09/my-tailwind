import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import customFetch from "../utils/customFetch";

const { products } = require('../utils/products');

const ItemListContainer = () => {
    
    const [datos, setDatos] = useState([]);
    const { categoryId } = useParams();


    useEffect(() => {
        customFetch(2000,products.filter(item => {
            if (categoryId === undefined) return item;
            return item.categoryId === parseInt(categoryId)
        }))
            .then (result => setDatos(result))
            .catch (err => console.log(err))
    },[datos]);

    return (
        <>
            <ItemList  items = {datos}/>
        </>
    )
}

export default ItemListContainer  