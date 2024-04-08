import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './HomePage';
import Store from './Store';
import Service from './Service';
import About from './About';
import Cart from './cart';
import Login from './UserLogin'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='marketplace' element={<Store />} />
          <Route path='cart' element={<Cart />} />
          <Route path='service' element={<Service />} />
          <Route path='about' element={<About />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
