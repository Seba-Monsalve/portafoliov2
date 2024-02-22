import { tecnologias } from '../info/tecnologias'
export const Tecnologias = () => {
  return (
    
    <section id="tecnologias" className="seccion-oscura">

    <pre >Lo que he aplicado</pre>
    <h2 className="seccion-titulo">Tecnologias </h2>
    <p className="descripcion">Desde el desarrollo de software hasta la explotacion de datos, he trabajado con diferentes herramientas y frameworks, ya sea en mi trabajo oficial o de forma autodidacta.
    Estas son las que mas he utilizado a lo largo de mi trayectoria</p>

    <ul className="list-tecnologias">
        {tecnologias.map((tecnologias) => {
            return (
                <li key={tecnologias.title} className="tecnologias-item">
                    <img src={tecnologias.icon_path} alt={tecnologias.title} />
                    <hr />
                    <h3>{tecnologias.title}</h3>
                    {/* <p>{tecnologias.desc}</p> */}
                </li>
            )
        })}
    </ul>
</section>
  )
}
