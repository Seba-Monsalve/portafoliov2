import { tecnologias } from "../info/tecnologias";
import { FloatingNav } from "./FloatingNav";
import { SkillItem } from "./SkillItem";
import { habilidades } from '../info/habilidades';
import { Icon } from '../utils/Icon';
import { iconos } from "../assets/icons/iconos";

export const Tecnologias = () => {

    return (
        <section id="tecnologias" >

            {iconos.map(({fillRule, name, path_d, viewBox, }) => {
                return <Icon 
                    viewBox={viewBox}
                    path_d={path_d}
                    className="icon"
                    fillRule={fillRule}
                ></Icon>

            })}

            <h2 className="seccion-titulo">Habilidades </h2>
            <p className="descripcion">Est fugiat consequat nisi ea excepteur minim ullamco consectetur ut et ex pariatur id eu. Ullamco culpa quis aliqua adipisicing pariatur do. Anim est ad voluptate consectetur voluptate ullamco sint irure do. Voluptate enim enim velit nisi excepteur sunt laboris ea Lorem tempor elit laboris irure.</p>

            <ul className="habilidades-list">
                {habilidades.map((skill) => <SkillItem {...skill} />)}
            </ul>

            <br /><br />

            <hr style={{ 'color': 'black', 'width': '100%' }} />
            <h2 className="seccion-titulo">Tecnologias </h2>


            <ul className="list-tecnologias">
                {tecnologias.map((tecnologias) => {
                    return (
                        <li key={tecnologias.title} className="tecnologias-item">
                            <img  src={tecnologias.icon_path} alt={tecnologias.title} />
                            <hr />
                            <h3>{tecnologias.title}</h3>
                            {/* <p>{tecnologias.desc}</p> */}
                        </li>
                    )
                })}
            </ul>
            <FloatingNav />
        </section>
    )
}

