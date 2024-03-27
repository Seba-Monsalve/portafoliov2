
interface Props {
    path_d: string[]
    , viewBox: string
    , style?: React.CSSProperties
    , className?: string
    , height?: string
    , width?: string
    ,fillRule?:any
}

export const Icon = ({fillRule, className, path_d, viewBox, style, height = '50px', width = '50px' }: Props) => {
    return (
        <svg
            className={className}
            style={style}
            xmlns="http://www.w3.org/2000/svg"
            viewBox={viewBox}
            fill="currenColor"
            width={width}
            height={height}
            fillRule={fillRule}
        >
            {path_d.map((path) =>
                <path d={path} />
            )}
        </svg>
    )
}
