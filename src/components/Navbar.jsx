import React from 'react'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <>
        <nav className='bg-neutral-400 h-[80px] mx-auto px-6 py-3 flex justify-between items-center'>
           

            <div id='logo' className=''>
                <span>SUPPORT</span>
            </div>  
           
                <ul className='flex'>
                    <li className='px-2'> <a href="">Nosotros</a></li>
                    <li className='px-2'><a href="">Categorías</a> </li>
                    <li className='px-2 '><a href="">Envíos</a></li>
                    <CartWidget/>
                </ul>
        
        </nav>
    </>
    )
}

export default Navbar