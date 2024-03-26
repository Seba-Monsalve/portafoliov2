
export const Footer = () => {

    const year = new Date().getFullYear()
    return (
        <footer className='seccion-oscura' id='footer'>
            <br />
            <h2  id="footer-titulo">Seba Monsalve © {year}</h2>
        </footer>
    )
}
