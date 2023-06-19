import { LayoutPages } from '../Components/LayoutPages'
import iconss from '../assets/icons/iconss.js'

export const About = () => {
  return (
    <>
      <LayoutPages text='Sobre Nosotros'>
        <div className='md:p-32 p-7 md:flex my-10 gap-10 justify-center'>
          <div className='md:w-1/2 flex h-[600px]'>
            <img
              src={iconss.mecanico}
              alt="'imagen de guerrero"
              width={700}
            />

          </div>
          <div className='md:w-1/2'>
            <div className='flex flex-col gap-5 my-5'>
              <h3 className='text-2xl font-bold'>Sobre la Compañia</h3>
              <h1 className='text-5xl font-bold'>Tu sueño comienza en el momento de conocernos</h1>
              <p className='text-gray-600 text-xl '>Nos enorgullece contar con un equipo de ingenieros y diseñadores dedicados que trabajan incansablemente para crear vehículos de calidad y vanguardia. Nuestro compromiso con la excelencia se refleja en cada detalle, desde la selección de materiales hasta la implementación de tecnologías de vanguardia.</p>
            </div>
            <div className='flex justify-between'>
              <div className='md:p-8'>
                <div className='p-2'>
                  <img
                    src={iconss.icon1}
                    width={80}
                  />
                </div>
                <div className='flex md:gap-3 items-center'>
                  <div>
                    <h1 className='text-5xl font-bold '>20</h1>
                  </div>
                  <div>
                    <p className='text-gray-600 text-xl'>Car</p>
                    <p className='text-gray-600 text-xl'>types</p>
                  </div>
                </div>

              </div>

              <div className='md:p-8'>
                <div className='p-2'>
                  <img
                    src={iconss.icon2}
                    width={80}
                  />
                </div>
                <div className='flex md:gap-3 items-center'>
                  <div>
                    <h1 className='text-5xl font-bold '>5</h1>
                  </div>
                  <div>
                    <p className='text-gray-600 text-xl'>Segury</p>
                    <p className='text-gray-600 text-xl'>types</p>
                  </div>
                </div>

              </div>

              <div className='md:p-8'>
                <div className='p-2'>
                  <img
                    src={iconss.icon3}
                    width={80}
                  />
                </div>
                <div className='flex md:gap-3 items-center'>
                  <div>
                    <h1 className='text-5xl font-bold '>10</h1>
                  </div>
                  <div>
                    <p className='text-gray-600 text-xl'>Money</p>
                    <p className='text-gray-600 text-xl'>free</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </LayoutPages>

    </>
  )
}
