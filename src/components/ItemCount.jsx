import React, { useEffect, useState } from 'react'

const ItemCount = ( {stock = 0, initial = 1} ) => {
    
 const [contador, setContador] = useState(0);

    useEffect(() =>{
        setContador(initial);
    },[]);

 const increment = () =>{
     if (contador < stock){
         setContador(contador+1)
     }
 }

 const decrement = () =>{
     if (contador > initial){
        setContador(contador-1)        
     }
 }
 
    return (
    <div>
        <div className='py-2'>
            <div className='text-lg'>
                <button onClick={decrement}>-</button>
                {contador}
                <button onClick={increment} >+</button> <br />
            </div>
            <div className='text-lg mt-2 '> 
                <button className='bg-black text-white rounded-lg p-2' >Agregar al carrito</button>
            </div>    
        </div>
    </div>
  )
}

export default ItemCount