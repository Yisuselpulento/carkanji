export const Icons = ({ img, parrafe, info }) => {
  return (
    <div className='flex gap-3 my-2'>
      <div className='bg-red-300 rounded-full p-2 bg-opacity-20 '>
        <img
          src={`../src/assets/icons/icon${img}.webp`}
          width={200}
        />
      </div>
      <div>
        <p className='text-3xl font-bold mb-1'>{parrafe}</p>
        <p className='text-gray-600 text-xl'>{info}</p>
      </div>
    </div>
  )
}
