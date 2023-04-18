import React from 'react'
import Navbar from './navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './authentication/Login';
import Register from './authentication/Register';
import Home from './pages/Home';
import About from './authentication/About';
import Gallery from './authentication/Gallery';

const App = () => {
  return (
   <Router>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
    </Routes>
   </Router>
  )
}

export default App