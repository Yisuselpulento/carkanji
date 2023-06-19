export const Preguntas = ({ pregunta, respuesta }) => {
  return (
    <div className='md:w-[800px]'>
      <h1 className='font-bold text-xl p-2 bg-red-600 shadow-lg shadow-red-800 py-4 px-4 text-white'>1. {pregunta}</h1>
      <p className='text-gray-500 text-xl p-5 shadow bg-white'>{respuesta}</p>
    </div>
  )
}
