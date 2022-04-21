import React from 'react'
import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer';
import Cart from './Cart';
import CartContextProvider from "./CartContext"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
  return (
    <CartContextProvider>
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:idCategory' element={<ItemListContainer/>}   />
            <Route path='/item/:idItem' element={<ItemDetailContainer/>}  />
            <Route path='/cart' element={<Cart/>} />
        </Routes>
    
    </Router>
    </CartContextProvider>
  )
}

export default Home