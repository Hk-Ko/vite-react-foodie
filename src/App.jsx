import React from 'react'

import './index.css'
import { Routes,Route } from 'react-router-dom'
import Meals from './Meals'
import Detail from './Detail'
import Navbar from './Navbar'


const App = () => {
  return (
    <div className='container mx-auto relative'>
      <Navbar/>
      <Routes>
        <Route path="/"element={<Meals/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
    </div>
  )
}

export default App