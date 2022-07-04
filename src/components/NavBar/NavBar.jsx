import React  from 'react'
import { NavLink } from 'react-router-dom'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import  logo from "./LOGOPRINCIPALSUITTE.png"
import Image from './Image.png'
import './NavBar.css'

const NavBar = () => {

    const navigation = [
        { name: 'Inicio', href: '/' },
        { name: 'Categorías', href: '/categorias' },
        { name: '¿Quienes Somos?', href: '/somos' },
      ]

  return (

<div className="relative bg-white overflow-hidden">
<div className="max-w-7xl mx-auto">
{/* lg:pb-28 xl:pb-32 */}
{/* pb-8 */}
  <div className="relative z-10  bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full ">
    <svg
      className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
      fill="currentColor"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <polygon points="50,0 100,0 50,100 0,100" />
    </svg>

    <Popover>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <NavLink to={'/'}>
                
                {/* Logo modificado css */}
                <img
                  alt="Suitte"
                  className="logo"
                  src={logo}
                />
              </NavLink>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                  
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
            {navigation.map((item) => (
              <NavLink key={item.name} to={item.href} className={`font-medium text-gray-600 hover:text-cyan-400 ${({ isActive}) => (isActive ? 'text-cyan-500' : '')}`}>
                {item.name}
              </NavLink>
            ))}
            <NavLink to={'/contacto'} className="font-medium text-gray-600 hover:text-cyan-400">
              Contáctenos
            </NavLink>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                {/* Logo responsive modificado css */}
                <img
                  className="logo2"
                  src={logo}
                  alt="Pobla Web"
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                  <span className="sr-only">Cerrar menu desplegable</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-100"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <NavLink
              to={"/contacto"}
              className="block w-full px-5 py-3 text-center font-medium text-gray-700 hover:text-zinc-100 bg-gray-50 hover:bg-cyan-600"
            >
              Contáctenos
            </NavLink>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>

    
  </div>
</div>
<div className="lg:absolute lg:inset-y-1 lg:right-1 lg:w-1/2">
{/* object-cover */}
  <img
    className=" w-full  sm:w-full sm:h-full md:w-full md:h-60 lg:w-full lg:h-full"
    src={Image}
    alt="Fondo"
  />
</div>
</div>
  )
}

export default NavBar