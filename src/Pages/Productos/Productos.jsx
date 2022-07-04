import React, {useEffect, useState}from 'react'

import { getProductos } from '../../funtions'
import {useLocation, useParams } from 'react-router-dom'
import './productos.css'
import Cargando from '../../components/Cargando/Cargando'


const Productos = () => {

const params = useParams()
const location = useLocation()
console.log(location);
const [productos, setProductos] = useState(null)
  useEffect(() =>{
    getProductos(setProductos, params.empresa)
    
},[])

const mensaje = 'Informacion sobre,'

  return (
   <>
    {productos != null ? (
      <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      
      <div className='text-center mb-12'>
        <h1 className='text-4x1 md:text-6xl text-gray-700 font-semibold'>{params.empresa}</h1>
        <br />
        <br />
      </div>
        <h2 className="sr-only">Productos</h2>

        <div className=" grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
          {productos.map((product) => (
            <div className="bordes h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <a key={product.id} href={`https://api.whatsapp.com/send?phone=57${location.search}&text=${mensaje} ${product.name}`} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              <p className="mt-1 text-lg font-medium text-gray-900">{params.empresa}</p>
              
            </a>
            </div>
          ))}
        </div>
        
      </div>
    </div>
    ) : (<Cargando/>)}
   </>
  )
}

export default Productos
