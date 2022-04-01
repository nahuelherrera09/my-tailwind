import React from 'react'
import {ShoppingCartIcon} from '@heroicons/react/outline'



const CartWidget = () => {
  return (
    <div className='flex'> 
     <ShoppingCartIcon className='h-5 w-5'/>
     <div>(0)</div>
    </div>
  )
}

export default CartWidget