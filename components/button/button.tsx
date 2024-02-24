const Button = ({ children, ...props }: any) => {
    return (
        <button className="bg-primary-900 hover:bg-primary-700 text-white py-4 px-5 rounded-lg" {...props}>
            {children}
        </button>
    )
}

export default Button;