import Link from "next/link";

const CLink = ({ children, ...props }: any) => {
    return (
        <Link className={`text-primary-900 hover:text-primary-700 hover:underline ${props.className}`} {...props}>
            {children}
        </Link>
    )
}

export default CLink;