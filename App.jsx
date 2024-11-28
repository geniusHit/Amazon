import React from 'react'
import Navbar from './Components/Navbar'
import './bootstrap.min.css'
import Nav2 from './Components/Nav2'
import Carousel from './Pages/Carousel'
import './index.css'
import './App.css'
import Objects1 from './Pages/Objects1'
import Kitchen from './Pages/Kitchen'
import Footer1 from './Components/Footer1'
import Footer2 from './Components/Footer2'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Signup from './Pages/Signup'
import Home from './Pages/Home'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Nav2/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
      <Footer1/>
      <Footer2/>
    </div>
  )
}

export default App