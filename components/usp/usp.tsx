import Image from "next/image";

const USP = ({ image, alt, children }: any): JSX.Element => {
    return (
        <div className="flex flex-col space-y-3">
            <Image className="bg-primary-50 rounded-full w-fit p-3" src={image} width={24} height={24} alt={alt} />
            {children}
        </div>
    );
}

export default USP;