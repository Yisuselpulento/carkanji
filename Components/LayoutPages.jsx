export const LayoutPages = ({ children, text }) => {
  return (
    <div>
      <div className="bg-[url('../src/assets/Cars/bg-models.jpg')] bg-no-repeat relative h-[296px] bg-cover">

        <div className='bg-white absolute opacity-90 w-full'>

          <div className='py-32  md:px-8 px-24  bg-cover shadow-xl '>
            <h1 className='font-bold uppercase text-4xl'>{text}</h1>

          </div>

        </div>

      </div>

      <main>
        {children}
      </main>
      <div className='p-16 bg-black  bg-opacity-90 text-center mb-10'>
        <h1 className='text-white font-bold text-4xl mb-4'>Ponte en contacto con nosotros si buscas un auto</h1>
        <p className='text-red-500 font-bold text-4xl'>+56975259414</p>

      </div>

    </div>
  )
}
