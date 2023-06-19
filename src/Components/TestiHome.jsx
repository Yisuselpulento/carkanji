import { TestCard } from './TestCard'
import Peoplee from '../assets/People/Peoplee.js'

export const TestiHome = () => {
  return (
    <div className='bg-gray-100'>
      <div className='text-center p-8'>
        <h2 className='font-bold text-2xl p-2'>Review de personas</h2>
        <h1 className='text-5xl font-bold p-3'>Testimonios de Clientes</h1>
        <p className='text-gray-500 text-2xl p-2'>Ve los comentarios de nuestros mejores compradores.</p>

      </div>
      <div className='flex flex-col gap-10 items-center pb-16 '>
        <TestCard
          info='Estoy realmente molesta con la empresa de autos. Me siento decepcionada  por la falta de atención al cliente y la falta de transparencia. No encontre ningun auto con mi diseño.'
          name='Masa Aitaka'
          parrafe='Muy Mala'
          photo={Peoplee.MasaAitaka}
        />
        <TestCard
          info='Lo más impresionante es la calidad del automóvil en sí. Estoy verdaderamente impresionado con su rendimiento, comodidad y tecnología avanzada sin necesitar ninguna combinacion de teclas. '
          name='Jarl Cohnson'
          parrafe='Buena'
          photo={Peoplee.JarlCohnson}
        />

      </div>
    </div>

  )
}
