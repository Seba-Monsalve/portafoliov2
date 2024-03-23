import './App.css'
import { Navbar, Home, Tecnologias,Experiencia,Contacto, Footer, FloatingNav, Habilidades} from './components/'
import { Proyectos } from './components/Proyectos';

import "@fontsource/open-sans"; // Defaults to weight 400.

function App() {

  return (
    <>
      <Navbar />
      <hr style={{backgroundColor:'#d99a35',border:'none', height:'2px', width:'100%', margin:'0 0'}} />

      <Home />
      <Habilidades />
      <Tecnologias />
      <Proyectos />
      <Experiencia />
      <Contacto />
      <Footer />
      <FloatingNav />
    </>
  )
}

export default App
