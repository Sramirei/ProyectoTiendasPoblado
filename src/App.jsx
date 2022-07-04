import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Empresas from './Pages/Empresas/Empresas'
import NavBar from './components/NavBar/NavBar'
import Categorias from './Pages/Categorias/Categorias'
import Footer from './components/Footer/Footer';
import Nosotros from './Pages/Nosotros/Nosotros';
import Productos from './Pages/Productos/Productos';
import Contactenos from "./Pages/Contactenos/Contactenos";
const App = () =>{

  return(
    <>
     <BrowserRouter>
     <NavBar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/Empresas/:name' element = {<Empresas/>} />
        <Route path='/categorias' element = {<Categorias/>} />
        <Route path='/somos' element = {<Nosotros/>} />
        <Route path='/productos/:empresa' element = {<Productos/>} />
        <Route path='/contacto' element = {<Contactenos/>} />
      </Routes>
      </BrowserRouter>
      <br></br>
      <br></br>
      <br></br>
      <Footer/>
    </>
  )

}

export default App;
