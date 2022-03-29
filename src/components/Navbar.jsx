import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className='bg-neutral-400 container mx-auto px-6 py-3'>
           
            <div id='logo' className='flex'><span>SUPPORT</span></div>  
           
                <ul className='flex justify-center'>
                    <li className='px-2'> <a href="">Nosotros</a></li>
                    <li className='px-2'><a href="">Categorías</a> </li>
                    <li className='px-2 '><a href="">Envíos</a></li>
                </ul>
        
        </nav>
    </>
    )
}

export default Navbar