import React, { useState } from 'react'
import useModal from '../hooks/useModal'
import Alerta from './Alerta'

export const TheModal = () => {
  const { modal, setModal } = useModal()

  const [name, setName] = useState('')
  const [apellido, setApellido] = useState('')
  const [email, setEmail] = useState('')
  const [direccion, setDireccion] = useState('')
  const [cel, setCel] = useState('')
  const [edad, setEdad] = useState('')
  const [error, setError] = useState(false)
  const [msj, setMsj] = useState('')

  const handleformModal = (e) => {
    e.preventDefault()

    if ([name, apellido, email, direccion, cel, edad].includes('')) {
      setError(true)
      setMsj('Todos los campos son obligatorios')
      return
    }

    if (name.length < 3) {
      setError(true)
      setMsj('El nombre debe ser mayor a 2 caracteres')
      return
    }

    if (apellido.length < 3) {
      setError(true)
      setMsj('El nombre debe ser mayor a 2 caracteres')
      return
    }
    if (!/^([0-9])*$/.test(cel) || cel.length < 8) {
      setError(true)
      setMsj('Debe colocar un numero de telefono valido')
      return
    }
    if (!/^([0-9])*$/.test(edad)) {
      setError(true)
      setMsj('la Edad debe ser un numero')
      return
    }
    if (edad < 18) {
      setError(true)
      setMsj('Debes ser mayor de 18')
      return
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setError(true)
      setMsj('Debes colocar un Email valido')
      return
    }

    setError(false)
    console.log('comprando')
  }

  const handleCloseModal = () => {
    setModal(!modal)
  }

  return (
    <form onSubmit={handleformModal}>
      <div className=' flex flex-col gap-7 md:w-[700px] mt-20 md:mt-0 w-[350px] p-5 overflow-y-scroll md:h-full h-[450px]  scrollbar scrollbar-thumb-red-600'>
        <div className='font-bold text-2xl flex justify-between'>
          <h1 className='text-red-600 '>Informacion Personal</h1>
          <button onClick={
            () => { handleCloseModal() }
          }
          >
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-8 h-8'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            </svg>

          </button>

        </div>
        <div className='flex gap-5 flex-wrap'>
          <div className='flex flex-col gap-2 md:w-[300px] w-full'>
            <label
              htmlFor='nombres'
              className='text-xl'
            >Nombre <span className='text-red-700 font-bold'>*</span>
            </label>
            <input
              className='py-3 px-3 bg-gray-200 ' type='text'
              id='nombres'
              placeholder='Nombre Aqui'
              value={name}
              onChange={e => setName(e.target.value)}

            />
          </div>
          <div className='flex flex-col gap-2  md:w-[300px] w-full'>
            <label
              htmlFor='apellido'
              className='text-xl'
            >Apellido <span className='text-red-700 font-bold'>*</span>
            </label>
            <input
              className='py-3 px-3 bg-gray-200' type='text'
              id='apellido'
              placeholder='Apellido Aqui'
              value={apellido}
              onChange={e => setApellido(e.target.value)}

            />
          </div>
          <div className='flex flex-col gap-2  md:w-[300px] w-full'>
            <label
              htmlFor='number'
              className='text-xl'
            >Numero Cel<span className='text-red-700 font-bold'>*</span>
            </label>
            <input
              className='py-3 px-3 bg-gray-200' type='text'
              id='number'
              placeholder='+569...'
              onChange={e => setCel(e.target.value)}
              value={cel}
            />
          </div>
          <div className='flex flex-col gap-2  md:w-[300px] w-full'>
            <label
              htmlFor='edad'
              className='text-xl'
            >Edad <span className='text-red-700 font-bold'>*</span>
            </label>
            <input
              className='py-3 px-3 bg-gray-200' type='text'
              id='edad'
              placeholder='+18'
              onChange={e => setEdad(e.target.value)}
              value={edad}
            />
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col gap-2 w-full'>
            <label
              htmlFor='emails'
              className='text-xl'
            >Email <span className='text-red-700 font-bold'>*</span>
            </label>
            <input
              className='py-3 px-3 bg-gray-200' type='text'
              id='emails'
              placeholder='example@hotmail.com'
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className='flex flex-col gap-2 w-full'>
            <label
              htmlFor='direccion'
              className='text-xl'
            >Direccion <span className='text-red-700 font-bold'>*</span>
            </label>
            <input
              className='py-3 px-3 bg-gray-200' type='text'
              id='direccion'
              placeholder='Direccion aqui'
              onChange={e => setDireccion(e.target.value)}
              value={direccion}
            />
          </div>

        </div>

        <div className='flex gap-2'>
          <input type='checkBox' />
          Porfavor mandenme informacion sobre algun problema o actualizacion
        </div>
        {error && <Alerta>{msj}</Alerta>}
        <div className='mb-5'>
          <input
            type='submit'
            value='Ir a la compra'
            className='bg-red-600 py-5 px-20 uppercase text-white font-bold hover:bg-red-800 cursor-pointer text-xl shadow-lg shadow-red-500 w-full flex gap-4 justify-center'
          />
        </div>
      </div>
    </form>
  )
}
