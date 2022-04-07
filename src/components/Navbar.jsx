import { ShoppingBagIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import React from 'react'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <>
        <nav className='bg-white h-[80px] mx-auto px-6 py-3 flex justify-between items-center'>
           

            <div id='logo' className='font-sans'>
                <span className=''>SUPPORT</span>
                
                
            </div>  
           

                <ul className='flex font-sans'>
                    <li className='px-2'> <a href="">Nosotros</a></li>
                    <li className='px-2'><a href="">Categorías</a> </li>
                    <li className='px-2 '><a href="">Envíos</a></li>
                    <li><CartWidget></CartWidget></li>
                </ul>
                
                
        
        </nav>
    </>
    )
}

export default Navbar