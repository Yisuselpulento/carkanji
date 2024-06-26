/* eslint-disable react/jsx-closing-tag-location */
import { useState } from 'react'
import { Outlet, NavLink, Link } from 'react-router-dom'
import Modal from 'react-modal'
import { TheModal } from '../Components/TheModal'
import useModal from '../hooks/useModal'
import Carss from '../assets/Cars/Carss.js'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

Modal.setAppElement('#root')

export const Layout = () => {
  const [activeMenu, setActiveMenu] = useState(true)

  const { modal } = useModal()

  const handleMenuActive = () => {
    setActiveMenu(!activeMenu)
  }

  const navLinks = [
    { to: '/', text: 'Inicio' },
    { to: 'about', text: 'About' },
    { to: 'models', text: 'Modelos' },
    { to: 'testimonios', text: 'Testimonios' },
    { to: 'contact', text: 'Contacto' }
  ]

  return (

    <div className='text-black text-opacity-80 '>
      {modal && (<Modal isOpen={modal} style={customStyles}><TheModal /></Modal>)}
      <header>

        <nav className='md:flex md:justify-between bg-white items-center shadow-md md:py-3 px-3 fixed md:static z-10 '>
          <button
            className='md:hidden m-3'
            onClick={handleMenuActive}
          >
            {activeMenu
              ? <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-8 h-8 '>
                <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
              </svg>
              : <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-8 h-8'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
              </svg>}
          </button>
          <Link to='/'>
            <img
              src={Carss.logo} alt='Imagen logo BR' width={60}
            />

          </Link>

          <ul className={`${activeMenu ? 'hidden' : 'flex flex-col gap-10 p-5'} md:flex md:gap-5`}>
            {navLinks.map((link, index) => (
              <li key={index} className='flex justify-center items-center h-[30px] '>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive ? 'font-bold bg-red-500  text-white w-full h-full flex items-center md:justify-center md:w-[100px] md:h-[60px] p-5' : 'font-bold text-gray-500 p-5  hover:bg-gray-200  w-full flex items-center md:justify-center md:w-[100px] md:h-[60px]'}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>

        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className='flex flex-col md:flex-row justify-between items-center text-center py-10 bg-black bg-opacity-90'>
        <div className='p-10 md:w-1/3 text-white'>
          <h1 className='text-4xl font-bold uppercase '>Car Kanji</h1>
          <p>Nuestro compromiso con la excelencia se refleja en cada detalle, desde la selección de materiales hasta la implementación de tecnologías de vanguardia!</p>
        </div>
        <div className='p-10  md:w-1/3 text-white'>
          <h1 className='text-4xl font-bold uppercase '>Sedes</h1>
          <p>Santiago:
            Dirección: Avenida Providencia 1234, Santiago.
            Horarios: Lunes a viernes: 9:00 AM - 7:00 PM; Sábado: 10:00 AM - 4:00 PM.

            Concepción:
            Dirección: Calle Los Robles 567, Concepción.
            Horarios: Lunes a viernes: 9:30 AM - 6:30 PM; Sábado: 10:00 AM - 3:00 PM.

            Viña del Mar:
            Dirección: Avenida Marina 789, Viña del Mar.
            Horarios: Lunes a viernes: 9:00 AM - 7:00 PM; Sábado: 9:00 AM - 2:00 PM.</p>
        </div>
        <div className='text-white p-10  md:w-1/3'>
          <h1 className='text-4xl font-bold uppercase'>Horarios</h1>
          <p>Lunes:
            Apertura: 9:00 AM
            Cierre: 6:00 PM

            Martes:
            Apertura: 9:00 AM
            Cierre: 6:00 PM

            Miércoles:
            Apertura: 9:00 AM
            Cierre: 6:00 PM

            Jueves:
            Apertura: 9:00 AM
            Cierre: 8:00 PM

            Viernes:
            Apertura: 9:00 AM
            Cierre: 8:00 PM

            Sábado:
            Apertura: 10:00 AM
            Cierre: 4:00 PM

            Domingo:
            Cerrado</p>
        </div>

      </footer>

    </div>
  )
}
