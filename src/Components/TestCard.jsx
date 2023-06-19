export const TestCard = ({ info, photo, parrafe, name }) => {
  return (

    <div className='flex flex-col justify-between shadow-xl p-14 md:w-[550px] bg-white '>
      <div>
        <p className='text-2xl mb-7'>{info}</p>
      </div>

      <div className='flex justify-between '>
        <div className='md:flex  gap-5'>
          <div>
            <img className='rounded-full' src={photo} alt='' width={100} />
          </div>
          <div className='flex items-center'>
            <div>
              <h2 className='text-3xl font-bold mb-2'>
                {name}
              </h2>
              <p className='text-xl'>{parrafe}</p>
            </div>

          </div>
        </div>
        <div>
          <h1 className='text-orange-500 text-8xl font-bold'>;;</h1>
        </div>
      </div>
    </div>
  )
}
