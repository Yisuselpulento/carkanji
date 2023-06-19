export const ButtonDesc = ({ car, handleChangeCar }) => {
  return (
    <div>
      <button
        className='block text-xl font-bold text-white bg-red-600 py-5 hover:bg-red-800 uppercase m-2 w-full'
        type='button'
        onClick={() => {
          handleChangeCar()
        }}
      >
        {car}
      </button>
    </div>
  )
}
