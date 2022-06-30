import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Empresas from './pages/Empresas/Empresas'
import NavBar from './components/NavBar/NavBar'
import Categorias from './pages/Categorias/Categorias'
import Footer from './components/Footer/Footer';
import Nosotros from './pages/Nosotros/Nosotros';
import Productos from './pages/Productos/Productos';
import Contactenos from "./pages/Contactenos/Contactenos";
const App = () =>{

  return(
    <>
     <BrowserRouter>
     <NavBar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/Empresas/:name' element = {<Empresas/>} />
        <Route path='/categorias' element = {<Categorias/>} />
        <Route path='/About' element = {<Nosotros/>} />
        <Route path='/productos/:empresa' element = {<Productos/>} />
        <Route path='/contacto' element = {<Contactenos/>} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )

}

export default App;
