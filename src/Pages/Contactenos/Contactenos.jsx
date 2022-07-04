//Codigo de Contactenos
import React, {useState} from 'react';
import emailjs from '@emailjs/browser';
import './contacto.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const Contactenos = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

    const sendEmail = (event) => {
      event.preventDefault();
  
      emailjs.sendForm('service_pcc3nfu','template_sc6d5gr',event.target,'pRLei5QT5NSqYKB0G')
      .then(() => { 
         cambiarFormularioEnviado(true);
         setTimeout(() => cambiarFormularioEnviado(false), 3000);      
       });
       //Resetea el formulario despues de enviarse  
       event.target.reset();
    }

 return (    
      <>

    <Formik
      initialValues={{
        nombre:'',
        correo:'',
        telefono:'',
        mensaje:''
      }}

      validate={(valores) => {
        let errores = {};

        if(!valores.nombre){
          errores.nombre = 'Por favor ingrese un nombre.'
        } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
          errores.nombre = 'El nombre solo puede contener letras y espacios.'
        }

        if(!valores.correo){
          errores.correo = 'Por favor ingrese un correo electronico.'
        } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
          errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
        }

        if(!valores.telefono){
          errores.telefono = 'Por favor ingrese un telefono.'
        } else if(!/^\d{7,14}$/.test(valores.telefono)){
          errores.telefono = 'El telefono solo puede contener numeros y el maximo son 14 dígitos.'
        }

        if(!valores.mensaje){
          errores.mensaje = 'Por favor ingrese un mensaje.'
        } else if(!/^.{1,500}$/.test(valores.mensaje)){
          errores.mensaje = 'El mensaje solo puede contener un maximo de 500 caracteres.'
        }

        return errores;
      }}

     >

   {({errors}) => (

     <section>

        <div className='content'></div>
        <br></br>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Contáctese con Nosotros</h2>

			<Form className="formulario" onSubmit={sendEmail}>
       {/* Contenedor inputs */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:px-6 px-2 py-2">

				<div>

				  <div className='flexContainer'>

            <svg xmlns="http://www.w3.org/2000/svg" color="#2dd4bf" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
             <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg> 

             <label className='label' htmlFor="nombre">Nombre y Apellidos</label>

          </div>	

					  <Field
						 type="text"
						 name="nombre"
						 placeholder="Ej: Pablo Perez"
						 id="nombre"
             autoComplete="off"
             required
             className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
					  />
            <ErrorMessage name="nombre" component={() => (<div className='error'>{errors.nombre}</div>)}/>

				</div>

				<div>

          <div className='flexContainer'>

           <svg xmlns="http://www.w3.org/2000/svg" color="#2dd4bf" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
           </svg>

            <label className='label' htmlFor="correo">Correo Electrónico</label>

          </div>

					  <Field
						 type="email"
						 name="correo"
					   placeholder="Ej: pablo@hotmail.com"
					 	 id="correo"
             autoComplete="off"
             required
             className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-800 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
            />
            <ErrorMessage name="correo" component={() => (<div className='error'>{errors.correo}</div>)}/>
			
      	</div>
        
        <div>

          <div className='flexContainerTel'>
					 
            <svg xmlns="http://www.w3.org/2000/svg" color="#2dd4bf" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
             <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>	

            <label className='label' htmlFor="telefono">Número de Teléfono</label>

          </div>

            <Field
					   type="text"
					   name="telefono"
					   placeholder="Fijo o Celular"
					   id="telefono"
             autoComplete="off"
             required
             className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
       		  />
            <ErrorMessage name="telefono" component={() => (<div className='error'>{errors.telefono}</div>)}/>

				</div>

        <div>
             
          <div className='flexContainer'>
          
            <svg xmlns="http://www.w3.org/2000/svg" color="#2dd4bf" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>

            <label className='label' htmlFor='mensaje'>Mensaje</label>

          </div>

              <Field name="mensaje" 
               as="textarea" 
               id="mensaje" 
               cols="" 
               rows="2" 
               placeholder="Digita tu mensaje y te responderemos en breve."
               autoComplete="off"
               required
               className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md 
               focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
               />
              <ErrorMessage name="mensaje" component={() => (<div className='error'>{errors.mensaje}</div>)}/>

        </div>

       </div>
        {/* Boton enviar */}
        <div>
          
				  <button type="submit"
          className="bg-gray-100 hover:bg-gray-100 duration-300 px-4 py-2 border border-transparent font-medium
          rounded-md text-black md:w-auto w-full ">Enviar
          </button>

          {formularioEnviado && <p className='exito'>Solicitud enviada con exito!</p>}

        </div>

			</Form>

     </section>

   )}

  </Formik>

		</>

	);
}

export default Contactenos;