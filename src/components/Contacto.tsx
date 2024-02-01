import UseAnimations from "react-useanimations";
import github from 'react-useanimations/lib/github';
import linkedin from 'react-useanimations/lib/linkedin';


export const Contacto = () => {
    return (

        <section id="contacto" className="seccion-clara">
            <h2 className='seccion-titulo'>
                Contacto
            </h2>
            <p>Quis minim mollit quiQuis exercitation occaecat qui laborum pariatur excepteur proident irure exercitation laboris enim excepteur. Sunt enim nulla veniam in exercitation non deserunt commodo dolor deserunt amet sint adipisicing cupidatat. Labore aute consequat exercitation incididunt nulla ut aliquip consectetur eiusmod cupidatat laborum quis ipsum et. irure.</p>
            <br /><br />
            <ul className="contacto-list">
                <li className="contacto-item">
                    <UseAnimations autoplay loop speed={0.5} animation={github} size={50} />
                    <span>+569 9999 9999</span>
                </li>
                <li className="contacto-item">
                    <UseAnimations autoplay loop speed={5} animation={linkedin} size={50} />
                    <span>+569 9999 9999</span>
                </li>
                <li className="contacto-item">
                    <img src="./redes_sociales/whatsapp.svg" alt="" />
                    <span>  +569 9999 9999</span>
                </li>
            </ul>
        </section>


    )
}
