import { AutosModelos } from '../Components/AutosModelos'
import { LayoutPages } from '../Components/LayoutPages'

export const ModelsCar = () => {
  return (
    <LayoutPages
      text='modelos de autos'
    >
      <div className='p-16 flex flex-wrap justify-center items-center gap-8'>
        <AutosModelos
          num={1}
          nombre='Audi A1'
          precio='15'
          diesel='Diesel'
        />
        <AutosModelos
          num={2}
          nombre='Niss Gtr'
          precio='23'
          diesel='Fuel'
        />
        <AutosModelos
          num={3}
          nombre='BMW'
          precio='25'
          diesel='Diesel'
        />
        <AutosModelos
          num={4}
          nombre='Audi Q7'
          precio='15'
          diesel='Fuel'
        />
        <AutosModelos
          num={5}
          nombre='Audi Q7'
          precio='30'
          diesel='Diesel'
        />
        <AutosModelos
          num={6}
          nombre='BMW'
          precio='18'
          diesel='Diesel'
        />
      </div>

    </LayoutPages>

  )
}
