import React from 'react'
import {Spinner} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './cargando.css'

const Cargando = () => {
  return (
    <>
    <div className='divPadre'>
      <div className='divHijo'>
      <Spinner className='spinnerReactstrap' color = 'primary' />
      </div>
    </div>
    </>
  )
}

export default Cargando