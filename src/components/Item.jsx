import React from 'react'
import ItemCount from './ItemCount'


const Item = ( {title, stock, price, image} ) => {
  return (
      <>
        <div className=' w-2/3 mb-5 bg-white shadow-lg  '>
      
            <div>
                <img src={image} alt="" className=' rounded-md' />
            <div className="flex justify-between mt-2 mx-1 ">
                <div>
                <h3 className='text-xl'>{title}</h3>  
                </div>
                <div>${price}</div>
            </div>

            <div className='text-left mt-1 mx-1'>{stock} unidades</div>
            <ItemCount> </ItemCount>
            </div>
        </div>
      </>
    
  )
}

export default Item