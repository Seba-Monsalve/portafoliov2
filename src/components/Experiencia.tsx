import { useState } from "react"

export const Experiencia = () => {


    const [expDesc, setExpDesc] = useState(
        {
            year: '2000',
            empresa: 'Emerix',
            text: 'Documentacion',
            area: 'Producto Exelix',
            isClicked: 3
        });

    const handleOnClick = ({ year, text, isClicked, empresa, area, }: { area: string, year: string, text: string, isClicked: number, empresa: string }) => {
        setExpDesc({ area, year, text, isClicked, empresa, })
    }

    return (
        <section className="seccion-clara" id="experiencia">
            <pre>Donde he trabajado</pre>
            <h2 className="seccion-titulo">Experiencia</h2>
            <p className="descripcion">Este es mi control de experiencia, listo para el siguiente <i style={{ fontFamily: 'italic' }}>
                commit
            </i>
            </p>
            <br />
            <br />
            <div className="exp-spec">
                <div>
                    <div className="square red">■</div><p>Trabajo</p>
                    <div className="square orange">■</div><p>Autodidacta</p>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg">
                    <line className="line-exp" x1={0} y1={90} x2={250} y2={90} stroke="#6dc8cf" stroke-width="4" />
                    <path className="branch-exp" d=" 
                    M 160 80 160 50 
                    M 160 50 200 25
                    M 200 25 250 25 
                    " stroke="#807a79" strokeWidth={4} />
                    <line className="line-exp" x1={260} y1={90} x2={300} y2={90} stroke="#6dc8cf" stroke-width="4" strokeDasharray="5,5" />
                    <line className="line-exp" x1={260} y1={25} x2={300} y2={25} stroke="gray" stroke-width="4" strokeDasharray="5,5" />

                    <circle className="circle-exp" cx="12" cy="90" r="10" fill='gray' stroke="gray" stroke-width="4" />

                    {/* -------------------------- */}
                    <g className="exp-item"
                        onClick={() => handleOnClick({ year: '01-2020', text: 'Practica', empresa: 'Posbox', area: 'Python Dev', isClicked: 1 })}>
                        <circle className="circle-exp" cx="80" cy="90" r="15"
                            stroke={expDesc.isClicked == 1 ? 'white' : ''}
                            stroke-width="4" fill="red" />
                    </g>
                    <g className="exp-item"
                        onClick={() => handleOnClick({ year: '06/2020 - 12/2023', text: 'Desarrollo End-to-End', area: 'Producto Insight', empresa: 'Emerix', isClicked: 2 })}>
                        <circle className="circle-exp" cx="160" cy="90" r="15"
                            stroke={expDesc.isClicked == 2 ? 'white' : ''}
                            stroke-width="4" fill="red" />
                    </g>
                    <g className="exp-item"
                        onClick={() => handleOnClick({ year: '02/2024', text: 'Documentacion', area: ' Producto Exelix', empresa: 'Emerix', isClicked: 3 })}>
                        <circle className="circle-exp" cx="250" cy="90" r="15"
                            stroke={expDesc.isClicked == 3 ? 'white' : ''}
                            stroke-width="4" fill="red" />
                    </g>

                    {/* BRANCH AUTO */}
                    <g className="exp-item"
                        onClick={() => handleOnClick({
                            year: '01/2024', text: 'Desarrollo y formacion',
                            area: 'Estudios', empresa: 'Alura', isClicked: 4
                        })}>
                        <circle cx="250" cy="25" r="15"
                            stroke={expDesc.isClicked == 4 ? 'white' : ''}
                            stroke-width="4" fill="orange" />
                    </g>
                </svg>

                <div className="exp-desc">
                    <br />
                    <h2>{expDesc.year}</h2>
                    <hr style={{ border: '1px orange solid', width: '70%', margin: '10px auto' }} />
                    <h1>{expDesc.empresa}</h1>
                    <br />
                    <p>{expDesc.text}</p>
                    <br />
                    <p style={{ fontFamily: 'italic' }}> {expDesc.area}</p>

                </div>
            </div>
        </section>
    )
}
