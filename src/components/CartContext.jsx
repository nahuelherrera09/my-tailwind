import React, { createContext } from 'react'
import { useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ( {children} ) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {
        let found = cartList.find (product => product.idItem === item.id);
        if ( found === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imgItem: item.image,
                    nameItem: item.name,
                    constItem: item.price,
                    qtyItem: qty
                }
            ]);
        } else {
            found.qtyItem += qty
        }
    }
    
    const removeList = () => {
        setCartList([]);
    }

    const deleteItem = (id) => {
        let result = cartList.filter(item => item.idItem != id);
        setCartList(result);
    }

    return (
        <CartContextProvider value = {{cartList,addToCart,removeList,deleteItem}}>
            {children}
        </CartContextProvider>
    )

}



export default CartContext