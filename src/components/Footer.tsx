
export const Footer = () => {

    const year = new Date().getFullYear()
    return (
        <section className='seccion-oscura' id='footer'>
            <h2 className="seccion-titulo" id="footer-titulo">Seba Monsalve © {year}</h2>
        </section>
    )
}
