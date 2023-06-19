import { useEffect, useState } from 'react'
import { ButtonDesc } from './ButtonDesc'
import { Cars } from '../Pages/Helpers/carsName'
import useModal from '../hooks/useModal'
import Carss from '../assets/Cars/Carss.js'

export const EnDescuento = () => {
  const { modal, setModal } = useModal()

  const [actualCar, setActualCar] = useState('Audi')
  const [num, setNum] = useState(1)
  const [carSelect, setCarSelect] = useState({})

  const handleChangeAudi = () => {
    setActualCar('Audi')
    setNum(1)
  }
  const handleChangeLamborghini = () => {
    setActualCar('lamborghini')
    setNum(1)
  }

  const handleChangeBmw = () => {
    setActualCar('bmw')
    setNum(1)
  }
  const handleChangeAstro = () => {
    setActualCar('Astron')
    setNum(1)
  }
  const handleChangeOtros = () => {
    setActualCar('otros')
    setNum(1)
  }

  const handleChangeNum = () => {
    if (actualCar === 'Astron' && num === 1) { setNum(2) } else if (actualCar === 'Audi' && num === 1) { setNum(5) } else if (actualCar === 'lamborghini' && num === 1) { setNum(8) } else if (actualCar === 'bmw' && num === 1) { setNum(3) } else if (actualCar === 'otros' && num === 1) { setNum(4) } else { setNum(num - 1) }
  }

  const handleSumNum = () => {
    if (actualCar === 'Astron' && num === 2) { setNum(1) } else if (actualCar === 'Audi' && num === 5) { setNum(1) } else if (actualCar === 'lamborghini' && num === 8) { setNum(1) } else if (actualCar === 'bmw' && num === 3) { setNum(1) } else if (actualCar === 'otros' && num === 4) { setNum(1) } else { setNum(num + 1) }
  }

  useEffect(() => {
    const Carclear = Cars.filter(car => car.id === num && car.modelo === actualCar)
    setCarSelect(Carclear)
  }, [actualCar, num])

  return (
    <div className='flex flex-col '>
      <div className='text-center flex flex-col items-center  p-10 md:my-16 bg-black opacity-90 md:l  text-white'>
        <h2 className='font-bold text-2xl p-2'>Modelo de Vehiculos</h2>
        <h1 className='text-5xl font-bold p-2'>EN DESCUENTO</h1>
        <p className='text-gray-200 text-2xl p-2'>Elige una variedad de increibles vehiculos en descuento para tu siguiente viaje</p>

      </div>

      <div className='flex flex-wrap gap-10 p-10 my-10'>
        <div className='md:w-[300px] w-full'>
          <ButtonDesc
            car='audi'
            handleChangeCar={handleChangeAudi}
          />
          <ButtonDesc
            car='Lamborghini'
            handleChangeCar={handleChangeLamborghini}
          />
          <ButtonDesc
            car='BMW'
            handleChangeCar={handleChangeBmw}
          />
          <ButtonDesc
            car='Astron'
            handleChangeCar={handleChangeAstro}
          />
          <ButtonDesc
            car='Otros'
            handleChangeCar={handleChangeOtros}
          />

        </div>
        <div className='flex md:h-[600px]'>
          <div className='flex flex-col gap-20 items-center'>
            <div className='h-[300px] '>
              <img
                src={Carss[actualCar + num]}
                alt='img car'
                className='w-[500px]'
              />
            </div>
            <div className='flex gap-8'>
              <button
                className='bg-red-600 text-white font-bold text-xl py-3 hover:bg-red-800 w-[110px]'
                type='button'
                onClick={() => { handleChangeNum() }}
              >
                Anterior
              </button>
              <button
                className='bg-red-600 text-white font-bold text-xl py-3 hover:bg-red-800 w-[110px]' type='button'
                onClick={() => { handleSumNum() }}
              >
                Siguiente
              </button>
            </div>

          </div>

          <div />

        </div>
        <div className='flex flex-col mx-auto md:w-[365px] '>
          <div className='bg-red-600 text-center text-white text-3xl font-bold py-3 uppercase'>
            <h1>Info</h1>
          </div>
          <div className='flex justify-between border border-slate-800 text-center '>
            <h1 className=' text-xl  py-3 px-8 border-slate-800'>Modelo</h1>
            <p className=' text-xl  py-3 px-8 border-slate-800'>{carSelect[0]?.modelo}</p>
          </div>
          <div className='flex border border-slate-800 text-center justify-between '>
            <h1 className=' text-xl  py-3 px-8 border-slate-800'>Year</h1>
            <p className='text-xl py-3 px-8 border-slate-800'>{carSelect[0]?.year}</p>
          </div>
          <div className='flex border border-slate-800 text-center justify-between'>
            <h1 className='  text-xl  py-3 px-8 border-slate-800'>transmision</h1>
            <p className=' text-xl  py-3 px-8 border-slate-800'>{carSelect[0]?.transmision}</p>
          </div>
          <div className='flex border border-slate-800 text-center justify-between '>
            <h1 className=' text-xl py-3 px-8 border-slate-800'>Precio</h1>
            <p className=' text-xl  py-3 px-8 border-slate-800'>${carSelect[0]?.precio}</p>
          </div>

          <button
            onClick={() => setModal(!modal)}
            className='bg-red-600 hover:bg-red-800 uppercase text-white font-bold text-3xl mt-5 py-4 shadow-red-600 shadow-lg text-center'
          >
            comprar
          </button>

        </div>

      </div>

    </div>
  )
}
