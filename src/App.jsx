import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Contact } from './Pages/Contact'
import { Testimonios } from './Pages/Testimonios'
import { ModelsCar } from './Pages/ModelsCar'
import { Layout } from './Layouts/Layout.jsx'
import { ModalProvider } from './context/modalProvider'

export default function App () {
  return (
    <BrowserRouter>
      <ModalProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='models' element={<ModelsCar />} />
            <Route path='testimonios' element={<Testimonios />} />
            <Route path='contact' element={<Contact />} />
          </Route>
        </Routes>
      </ModalProvider>
    </BrowserRouter>
  )
}
