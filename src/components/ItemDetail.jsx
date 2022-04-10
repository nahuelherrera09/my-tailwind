import React from 'react'
import ItemCount from './ItemCount'
import { CreditCardIcon, CashIcon, ExclamationCircleIcon } from '@heroicons/react/outline'

const ItemDetail = ( {item} ) => {
 
 
    return (
    <>
        
            
        <div className='flex justify-center'>  
            <div className=' m-5 flex w-fit bg-white border rounded   '>
        
                    <img src={item.image.url} alt="" className=' w-2/4'  />
               

                <div className='flex flex-col mt-40 ml-4 gap-5'>
                    
                    <h1 className='text-4xl'> {item.name}</h1>
                   
                    <p className='text-lg'>{item.detail}</p>
                    <p className='text-xl font-bold'> ${item.price} </p>
                    <p ><CreditCardIcon className='w-5 inline pb-1'/> <strong>6</strong> cuotas sin interes.</p>
                    <p className='text-sm' ><CashIcon className='w-5 inline pb-1'/> 10% de descuento abonando por transferencia bancaria ó efectivo </p>
                    <p className='text-lg'>{item.color}</p>
                    <p> {item.stock} u.</p>

                    <ItemCount stock={item.stock} initial ={1}></ItemCount>
                    <div className='bg-grey opacity-80 mb-4 mx-auto'>
                       <p className='p-4 text-white'><ExclamationCircleIcon className='w-5 inline pb-1'/> Envíos GRATIS en compras mayores a $7000</p> 
                    </div>

                </div>
            </div>
        </div>
            
        
            
    </>
  )
}

export default ItemDetail