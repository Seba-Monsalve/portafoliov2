
export const Footer = () => {

    const year = new Date().getFullYear()
    return (
        <footer className='seccion-oscura' id='footer'>
            <hr style={{backgroundColor:'#d99a35',border:'none', height:'2px', width:'100%'}} />
            <br />
            <h2  id="footer-titulo">Seba Monsalve © {year}</h2>
        </footer>
    )
}
