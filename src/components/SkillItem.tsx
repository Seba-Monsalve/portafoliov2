interface SkillProps {
    title: string,
    icon_path: string
}

export const SkillItem = (props:SkillProps) => {

    const {title,icon_path} = props;

    return (
        <li className="habilidades-item">
            <div className="image-container">
                <img className='skill-icon' src={icon_path} alt="BugHunter!" />
            </div>
            <br />
            <h3>{title}</h3>
        </li>
    )
}
