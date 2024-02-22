import './App.css'
import { Navbar, Home, Tecnologias,Experiencia,Contacto, Footer, FloatingNav, Habilidades} from './components/'
import { Proyectos } from './components/Proyectos';

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
