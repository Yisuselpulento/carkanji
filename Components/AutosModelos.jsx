import useModal from '../hooks/useModal'

export const AutosModelos = ({ num, format, nombre, precio, diesel }) => {
  const { modal, setModal } = useModal()

  return (
    <div className=' border rounded shadow-lg '>
      <div>
        <img
          src={`../src/assets/Cars/Model${num}.${format}`} alt={`modelo ${num} de autos`}
          className='object-conver h-48 w-80'
        />
      </div>
      <div className='flex justify-between items-center '>
        <div className='items-center p-4 '>
          <h1 className='text-3xl font-bold mb-2 px-2'>{nombre}</h1>
          <p className='text-xl text-gray-500 font-bold mb-2 px-2'>Estrellas</p>
          <p className='text-xl text-gray-500 font-bold mb-2 px-2'>{nombre}</p>
          <p className='text-xl text-gray-500 font-bold mb-2 px-2'>Manual</p>
        </div>
        <div className='p-4'>
          <h1 className='text-3xl font-bold mb-2 px-6'>${precio}</h1>
          <p className='text-xl text-gray-500 font-bold mb-2  px-6'>por dia</p>
          <p className='text-xl text-gray-500 font-bold mb-2  px-7'>4/5</p>
          <p className='text-xl text-gray-500 font-bold mb-2  px-7'>{diesel}</p>

        </div>
      </div>
      <div className='flex items-center text-center  mx-8 my-8'>
        <button
          onClick={() => setModal(!modal)}
          type='button'
          className='shadow-lg shadow-red-400 w-full bg-red-600 py-7 rounded text-white uppercase font-bold text-xl hover:bg-red-800 px-10'
        >
          Comprar
        </button>

      </div>
    </div>
  )
}
