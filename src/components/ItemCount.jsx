import React, { useState } from 'react'

const ItemCount = () => {
    
 const [contador, setContador] = useState(1);

 const increment = () =>{
     if (contador < 5){
         setContador(contador+1)
     }
 }

 const decrement = () =>{
     if (contador > 1){
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