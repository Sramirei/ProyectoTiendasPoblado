import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { Empresas } from './Pages/empresas/Empresas';
import NavBar from './components/NavBar';
const App = () =>{

  return(
    <>
    
     <BrowserRouter>
     <NavBar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/empresa' element = {<Empresas/>} />
      </Routes>
      </BrowserRouter>
    </>
  )

}

export default App;