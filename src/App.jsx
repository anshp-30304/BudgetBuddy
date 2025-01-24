import React from 'react'
import { Route, Routes } from 'react-router'
import "./App.css"
import 'animate.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
function App() {
  return (
    <>
    <Navbar/>
   <Routes>
    <Route index element={<Home/>}/>
   </Routes>
  
    </>
  )
}

export default App
