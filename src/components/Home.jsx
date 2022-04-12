import React from 'react'
import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:idCategory' element={<ItemListContainer/>}   />
            <Route path='/item/:idItem' element={<ItemDetailContainer/>}  />
        </Routes>
    
    </Router>
  )
}

export default Home