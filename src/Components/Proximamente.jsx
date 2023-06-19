import { Link } from 'react-router-dom'
import { Icons } from './Icons'
import Carss from '../assets/Cars/Carss.js'

export const Proximamente = () => {
  return (
    <div>
      <div className='p-14 bg-black  bg-opacity-90 text-center flex flex-col items-center '>
        <h1 className='text-white font-bold text-5xl mb-4'>Proximamente a la venta</h1>
        <p className='text-red-500 font-bold text-4xl'>+56975259414</p>

      </div>

      <div className='flex
           justify-center'
      >
        <img src={Carss.WallpaperCamaros} alt='' width={1200} />
      </div>

      <div className='md:p-16 p-10 my-16 md:flex gap-20 '>

        <div className='md:w-1/2 flex flex-col gap-4 items-center text-center  mb-10'>
          <h3 className='text-2xl font-bold'>Porque escogernos</h3>
          <h1 className='text-5xl font-bold'>
            Nuestra empresa de autos es la elección perfecta
          </h1>
          <p className='text-xl text-gray-600'>
            Una de las principales razones por las cuales deberías escogernos es nuestra dedicación a la calidad. Cada vehículo que sale de nuestras instalaciones es sometido a rigurosos controles de calidad para garantizar su funcionalidad, seguridad y durabilidad. Nuestro equipo de ingenieros altamente capacitados y experimentados trabaja incansablemente para crear automóviles que superen las expectativas de nuestros clientes en términos de rendimiento y confiabilidad.
          </p>
          <Link to='about' className='bg-red-600 py-5 uppercase text-white font-bold hover:bg-red-800 cursor-pointer text-xl w-[300px] text-center flex justify-center'>
            Mas Detalles
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-7 h-7'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
            </svg>
          </Link>
        </div>

        <div className='md:w-1/2 md:flex flex-col gap-10'>
          <Icons
            img={4}
            parrafe='Mejores coches'
            info='Cada automóvil es una obra de arte en sí mismo, cuidadosamente diseñado para captar miradas.'
          />
          <Icons
            img={5}
            parrafe='Operador activo'
            info='Un servicio personalizado y adaptado a tus necesidades individuales. Nuestros operadores son expertos en la industria automotriz.'
          />
          <Icons
            img={6}
            parrafe='Seguridad'
            info='Automóviles que cumplen con los más altos estándares de seguridad.'
          />
        </div>

      </div>

    </div>
  )
}
