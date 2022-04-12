import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <>
        <nav className='bg-white h-[80px] mx-auto px-6 py-3 flex justify-between items-center shadow-md'>
           

            <div id='logo' className='font-sans'>
              <Link to='/'> 
               <h2 className='text-2xl font-semibold'>SUPPORT</h2>
              </Link> 
                
            </div>  
           

                <ul className='flex font-sans'>
                       <li className='px-2'>Nosotros</li>
                            
                            <Link to='/category/91'>
                            <li className='px-2'>Accesorios </li>
                            </Link>
                            <Link to='/category/92'>  
                            <li className='px-2'>Tops</li>
                            </Link>
                            <Link to='/category/93'> 
                            <li className='px-2'>Abrigos</li>
                            </Link>
                            <Link to='/category/94'>
                            <li className='px-2'>Bodys</li>
                         
                            </Link>
                    <li className='px-2 '>Envíos</li>
                    <li><CartWidget></CartWidget></li>
                </ul>
                
                
        
        </nav>
    </>
    )
}

export default Navbar