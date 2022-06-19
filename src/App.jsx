import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Empresas from './pages/Empresas/Empresas'
import NavBar from './components/NavBar/NavBar'
import Categorias from './pages/Categorias/Categorias'
import Footer from './components/Footer/Footer';
const App = () =>{

  return(
    <>
    
     <BrowserRouter>
     <NavBar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/Empresas/:nombre' element = {<Empresas/>} />
        <Route path='/categorias' element = {<Categorias/>} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )

}

export default App;
