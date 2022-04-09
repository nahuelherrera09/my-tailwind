import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ( {item} ) => {
 
 
    return (
    <>
        
            
        <div className='flex justify-center '>  
            <div className=' m-5 flex w-fit bg-white   '>
        
                    <img src={item.image.url} alt="" className=' w-2/4'  />
               

                <div className='flex flex-col mt-40 ml-4 gap-6'>
                    
                    <h1 className='text-4xl'> {item.name}</h1>
                   
                    <p className='text-lg'>{item.detail}</p>
                    <p className='text-xl font-bold'> ${item.price} </p>
                
                    {item.stock} u.

                    <ItemCount></ItemCount>
                </div>
            </div>
        </div>
            
        
            
    </>
  )
}

export default ItemDetail