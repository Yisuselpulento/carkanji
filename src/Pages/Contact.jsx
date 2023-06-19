import { LayoutPages } from '../Components/LayoutPages'
import { useState } from 'react'
import Alerta from '../Components/Alerta'

export const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [textArea, setTextArea] = useState('')

  const [error, setError] = useState(false)
  const [msj, setMsj] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if ([name, email].includes('')) {
      setError(true)
      setMsj('el Nombre y el Email son obligatorios')
      return
    }
    if (name.length < 3) {
      setError(true)
      setMsj('El nombre debe ser mayor a 2 caracteres')
      return
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setError(true)
      setMsj('Debes colocar un Email valido')
      return
    }

    console.log('enviando...')
  }

  return (
    <>
      <LayoutPages text='Contacto'>
        <div className='p-16 flex flex-wrap  gap-5 my-14 justify-center'>
          <div className='md:w-[600px] mb-10'>
            <h1 className='text-5xl font-bold mb-7'>Necesitas Informacion Adicional?</h1>
            <p className='text-gray-600 text-xl mb-6'>
              Un profesional multifacético experto en múltiples campos de investigación, desarrollo y especialista en aprendizaje. Más de 15 años de experiencia.
            </p>
            <h1 className='flex text-xl gap-2 mb-2' href='/'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z' />
              </svg>

              +56975259414
            </h1>
            <h1 className='mb-2 flex text-xl gap-2' href='/'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' />
              </svg>

              MonssterCore@hotmail.com
            </h1>
            <h1 className='flex text-xl gap-2' href='/'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z' />
                <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z' />
              </svg>

              Chile, Valparaiso
            </h1>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className='flex flex-col gap-3'
            >
              <div>
                <label
                  htmlFor='nombre'
                  className='text-xl font-bold '
                >
                  Nombre
                </label>

                <input
                  type='text'
                  id='nombre'
                  className='bg-gray-100 w-full py-5 px-5 mt-1'
                  placeholder='Nombre aqui'
                  onChange={e => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='text-xl font-bold '
                >
                  Email
                </label>

                <input
                  type='text'
                  id='email'
                  className='bg-gray-100 w-full py-5 px-5 mt-1'
                  placeholder='Email aqui'
                  onChange={e => setEmail(e.target.value)}
                  value={email}

                />
              </div>
              <div>
                <label
                  htmlFor='texto'
                  className='text-xl font-bold '
                >
                  Hablanos sobre ti
                </label>

                <textarea
                  type='text'
                  id='texto'
                  className='bg-gray-100 w-full py-5 px-5 mt-2 h-40'
                  placeholder='Escribenos aqui...'
                  onChange={e => setTextArea(e.target.value)}
                  value={textArea}
                />

              </div>
              {error && <Alerta>{msj}</Alerta>}
              <input
                className='bg-red-500 w-full py-5 text-white uppercarse font-bold text-xl hover:bg-red-700 cursor-pointer shadow-lg shadow-red-600 my-3'
                type='submit'
                value='Enviar'
              />

            </form>
          </div>

        </div>

      </LayoutPages>

    </>
  )
}
