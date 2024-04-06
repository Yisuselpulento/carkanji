import iconss from '../assets/icons/iconss.js'

export const Icons = ({ img, parrafe, info }) => {
  return (
    <div className='flex gap-6  items-center'>
      <div className='bg-red-300 rounded-full p-4 bg-opacity-30 md:w-[150px]'>
        <img
          src={iconss[`icon${img}`]}
          className='w-[150px]'
        />
      </div>
      <div>
        <p className='text-3xl font-bold mb-1'>{parrafe}</p>
        <p className='text-gray-600 text-xl'>{info}</p>
      </div>
    </div>
  )
}
