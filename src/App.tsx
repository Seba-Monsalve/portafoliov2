import './App.css'
import { Navbar, Home, Tecnologias,Experiencia,Contacto, Footer, FloatingNav, Habilidades} from './components/'
import { Proyectos } from './components/Proyectos';

import "@fontsource/open-sans"; // Defaults to weight 400.

function App() {

  return (
    <>
      <Navbar />

      <Home />
      <Habilidades />
      <Tecnologias />
      <Proyectos />
      <Experiencia />
      <Contacto />
      <Footer />
    </>
  )
}

export default App
