import { Link } from 'react-router-dom'

const Encabezado = () => {
  return (
    <div className='flex flex-wrap text-black text-opacity-80'>
      <div className='p-16 md:w-1/2 '>
        <div className='mb-14 flex flex-col text-center'>
          <p className='font-bold text-3xl py-2'>Pide tu perro ahora</p>
          <h1 className=' py-2 uppercase font-bold text-5xl'>sientete <span className='text-red-600'>seguro </span>comprando con nosotros!</h1>
          <p className='text-gray-500 text-xl font-bold'>Compra el auto de tus sueños, precios increibles, modelos unicos y de todo tipo.</p>
        </div>
        <div className='flex flex-wrap gap-4 items-center text-center md:flex-nowrap'>
          <Link to='/models' className='bg-red-600 py-5 px-13 uppercase text-white font-bold hover:bg-red-800 cursor-pointer text-xl shadow-lg shadow-red-500 w-full flex gap-4 justify-center'>
            Elige uno
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-7 h-7'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
            </svg>

          </Link>
          <Link
            to='about' className='bg-black py-5 px-13  uppercase text-white font-bold cursor-pointer hover:bg-white hover:text-black hover:outline
                    text-xl w-full flex gap-4 justify-center shadow-black shadow-lg'
          >
            Leer mas
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
            </svg>

          </Link>

        </div>

      </div>

      <div className='md:w-1/2 '>
        <img src='../src/assets/Cars/CarIntro.webp' alt='Car Intro' width={2200} height={2000} />

      </div>

    </div>
  )
}

export default Encabezado
