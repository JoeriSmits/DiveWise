interface IBodyText {
    children?: any
    title: string,
    subtitle?: string
}

const BodyText = ({children, title, subtitle }: IBodyText) => {
    return (
        <div className="my-16 space-y-8">
            <div className="flex justify-center flex-col space-y-3">
                {subtitle && <span className="subheading">{subtitle}</span>}
                {title && <h2>{title}</h2>}
            </div>

            {children && <div>{children}</div>}
        </div>
    )
}

export default BodyText;