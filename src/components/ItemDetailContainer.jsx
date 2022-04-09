import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router"
import customFetch from "../utils/customFetch";
import ItemDetail from './ItemDetail';
const { products } = require('../utils/products');


const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    
    
    useEffect(() => {
        customFetch(2000, products[4])
            .then(result => setDato(result))
            .catch(err => console.log(err))

    }, [] );

    return (
    <>
        <ItemDetail item={dato} />

    </>
      )
}

export default ItemDetailContainer