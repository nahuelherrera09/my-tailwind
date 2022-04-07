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
            <button onClick={decrement}>-</button>
            {contador}
            <button onClick={increment} >+</button> <br />
            <div className='text-xs '> 
                <button>Agregar al carrito</button>
            </div>    
        </div>
    </div>
  )
}

export default ItemCount