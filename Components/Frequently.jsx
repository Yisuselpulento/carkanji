import { Preguntas } from './Preguntas'

const Frequently = () => {
  return (
    <div>
      <div className='text-center p-10 my-8'>
        <h2 className='font-bold text-2xl p-2'>FAQ</h2>
        <h1 className='text-5xl font-bold p-3'>Preguntas mas Frecuentes</h1>
        <p className='text-gray-500 text-2xl p-2'>Aqui tienes una seccion para leer las preguntas mas comunes de la gente.</p>
      </div>

      <div className="p-16 my-8 bg-[url('../src/assets/Cars/corvette.png')] bg-no-repeat ">
        <div className=' flex flex-col justify-center  md:items-center overflow-scroll-y '>
          <Preguntas
            pregunta='¿Cuál es la garantía ofrecida en sus vehículos y qué cubre?'
            respuesta=' En nuestra empresa, ofrecemos una garantía integral para brindar tranquilidad a nuestros clientes. La duración y cobertura específica de la garantía pueden variar según el modelo y el país.'
          />
          <Preguntas
            pregunta='¿Tienen opciones de financiamiento disponibles para facilitar la compra de un automóvil?'
            respuesta='Sí, entendemos que la compra de un automóvil puede ser un compromiso financiero significativo. Por eso, ofrecemos opciones de financiamiento flexibles para facilitar la adquisición de nuestros vehículos.'
          />
          <Preguntas
            pregunta='¿Cuál es el consumo de combustible promedio de sus vehículos y qué medidas toman para mejorar la eficiencia energética?'
            respuesta='Nos comprometemos con la eficiencia energética y el cuidado del medio ambiente. El consumo de combustible promedio de nuestros vehículos puede variar según el modelo, la configuración y las condiciones de manejo'
          />

        </div>

      </div>
    </div>
  )
}

export default Frequently
