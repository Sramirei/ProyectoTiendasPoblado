import React, {useEffect, useState} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { getEmpresas } from '../../funtions'
import Cargando from '../../components/Cargando/Cargando'
import './empresas.css'


const Empresas = () => {


const params = useParams()
const [empresas, setEmpresas] = useState(null)

console.log(useParams());

  useEffect (() =>{
    getEmpresas(setEmpresas, params.name)
  },[])


  return (
    <>
   {empresas != null ? (
    <>
    <section className="md:h-full flex items-center text-gray-600">
        <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-12">
                {/* <h5 className="text-base md:text-lg text-indigo-700 mb-1">Categoria</h5> */}
                <h1 className="text-4xl md:text-6xl text-gray-700 font-semibold">{params.name}</h1>
            </div>
            <div className=" flex flex-wrap -m-4">
                {empresas.map((empresa) => (
                <div key={empresa.id} className=" p-8 sm:w-1/2 md:w-1/3 lg:w-1/3 ">
                    <div className="bordes h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <NavLink to={{pathname:`/productos/${empresa.name}`, search: empresa.phone}}>
                            <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                                src={empresa.img} alt="blog"
                            />
                        </NavLink>
                        <div  className="p-6 hover:bg-cyan-600 hover:text-zinc-100 transition duration-300 ease-in">
                        <NavLink to={{pathname:`/productos/${empresa.name}`, search: empresa.phone}}>
                            <h2 className="text-base font-medium text-gray-300 mb-1"></h2>
                                <h1 className="text-2xl font-semibold mb-3 text-gray-900 ">{empresa.name}</h1>
                                <p className="leading-relaxed mb-3 text-gray-900 ">{empresa.description}</p>
                            {/* <div className="flex items-center flex-wrap ">
                                 <NavLink to={`/productos/${empresa.name}`} className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">Ver mas
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth ="2"
                                        fill="none" strokeLinecap ="round" strokeLinejoin ="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg> 
                                
                                
                            </div> */}
                            </NavLink>
                        </div>
                    </div>
                </div>))}         
            </div>
        </div>
    </section>
    
    
    </>
   ): (<Cargando/>)}
    </>
  )
}

export default Empresas