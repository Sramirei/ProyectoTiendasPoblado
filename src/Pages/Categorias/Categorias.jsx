import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import Cargando from '../../components/Cargando/Cargando';
import { todasCategorias } from '../../funtions'

const Categorias = () => {
const [categorias, setCategorias] = useState(null);

  useEffect (() =>{
    todasCategorias(setCategorias)
  },[])

  return (
    <>
    {categorias != null ? (
     <div className="bg-gray-100">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
       <div className='text-center mb-12'>
        <h1 className='text-4x1 md:text-6xl text-gray-700 font-semibold'>Categorias</h1>
        <br />
      </div>

         <div className="mt-2 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-6">
           {categorias.map((categoria) => (
             <div key={categoria.id} className="group relative">
               <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                 <img
                   src={categoria.img}
                   alt={categoria.name}
                   className="w-full h-full object-center object-cover"
                 />
               </div>
               <h3 className="mt-6 text-sm text-gray-500">
                 <NavLink to={`/Empresas/${categoria.name}`}>
                   <span className="absolute inset-0" />
                   {categoria.name}
                 </NavLink>
               </h3>
               {/* Descripcion de la categoria */}
               <p className="text-base font-semibold text-gray-900">{categoria.description}</p>
             </div>
           ))}
         </div>
       </div>
     </div>
   </div>
    ) : (<Cargando/>)}
    </>
  )
}

export default Categorias



//<NavLink to={`/Empresas/${categoria.codigo}`}> {categoria.nombre} </NavLink>