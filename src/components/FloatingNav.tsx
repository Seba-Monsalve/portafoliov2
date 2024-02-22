
export const FloatingNav = () => {
    return (
        <aside className="floating-nav">
{/* 
            <div className="site-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height={180}  viewBox="0 0 48 48">
                    <g>
                        <rect
                            width='150'
                            height="10" 
                            style={{ fill: 'blue', 
                            transformOrigin: 'center', 
                            transform: 'rotate(90deg) translateY(calc(50%)) translateX(calc(-100%))' }} />
                    </g>
                </svg>
            </div> */}
            <ul>
                <li className="floating-nav-link"><a href="#navbar">Home</a></li>
                <li className="floating-nav-link"><a href="#habilidades">Habilidades</a></li>
                <li className="floating-nav-link"><a href="#tecnologias">Tecnologias</a></li>
                <li className="floating-nav-link"><a href="#experiencia">Experiencia</a></li>
                <li className="floating-nav-link"><a href="#contacto">Contacto</a> </li>
            </ul>
        </aside>
    )
}
