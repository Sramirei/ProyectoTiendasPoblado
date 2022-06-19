import React, {useEffect, useState} from 'react'
import { allEmpresas } from '../../funtions'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Cargando from '../../components/Cargando/Cargando'
import './home.css'


const Home = () => {

  const [empresas, setEmpresas] = useState(null)
  useEffect(() =>{
    allEmpresas(setEmpresas)
  },[])


  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };


  return (
    <>

<div className='baner'>
  <h1>Aqui va el banner</h1>
  <br/>
  <br/>
  <br/>
</div>


{/* Slider de empresas */}
<section className='empresas' id='empresas'>
      {empresas != null ? (
      <div className='relative flex items-center'>
      <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
      <div
        id='slider'
        className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
      >
        {empresas.map((item) => (
          <img
            key={item.id}
            className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
            src={item.imagen}
            alt='/'
          />
        ))}
      </div>
      <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
    </div>
):
      (<Cargando />)}
</section>
    
    </>

  )
}

export default Home