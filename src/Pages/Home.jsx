import { EnDescuento } from '../Components/EnDescuento'
import Encabezado from '../Components/Encabezado'
import Frequently from '../Components/Frequently'
import { Proximamente } from '../Components/Proximamente'
import { TestiHome } from '../Components/TestiHome'

export const Home = () => {
  return (
    <div>
      <div>
        <Encabezado />
      </div>
      <div>
        <EnDescuento />
      </div>
      <div>
        <Proximamente />
      </div>
      <div>
        <TestiHome />
      </div>
      <div>
        <Frequently />
      </div>

    </div>
  )
}
