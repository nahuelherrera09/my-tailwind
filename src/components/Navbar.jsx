import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <>
        <nav className='bg-white h-[80px] mx-auto px-6 py-3 flex justify-between items-center shadow-md'>
           

            <div id='logo' className='font-sans'>
                <h2 className='text-2xl font-semibold'>SUPPORT</h2>
                
                
            </div>  
           

                <ul className='flex font-sans'>
                    <li className='px-2'>Nosotros</li>
                    <li className='px-2'>Categorías </li>
                    <li className='px-2 '>Envíos</li>
                    <li><CartWidget></CartWidget></li>
                </ul>
                
                
        
        </nav>
    </>
    )
}

export default Navbar