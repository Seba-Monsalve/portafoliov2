import { tecnologias } from '../info/tecnologias';
export const Tecnologias = () => {



    return (
        <section id="tecnologias" className="seccion-oscura">

            <pre style={{ margin: ' 0 auto' }}>Lo que he aplicado</pre>
            <h2 className="seccion-titulo" style={{ margin: ' 0 auto' }}>Tecnologias </h2>
            <p className="descripcion" style={{ margin: ' 0 auto' }}>Desde el desarrollo de software hasta la explotacion de datos, he trabajado con diferentes herramientas y frameworks, ya sea en mi trabajo oficial o de forma autodidacta.
                Estas son las que mas he utilizado a lo largo de mi trayectoria</p>

            <div className="logos">
                {tecnologias.map((tecnologias) => {
                    return (
                        <div className='logos-slide' key={tecnologias.title}>
                            <img src={tecnologias.icon_path} alt={tecnologias.title} />
                            <br />
                            <br />
                            <p>{tecnologias.title}</p>
                        </div>
                    )
                })
                }
                {tecnologias.map((tecnologias) => {
                    return (
                        <div className='logos-slide'>
                            <img color="white" src={tecnologias.icon_path} alt={tecnologias.title} />
                            <br />
                            <br />
                            <p>{tecnologias.title}</p>

                        </div>
                    )
                })
                }

            </div>
        </section>
    )
}
