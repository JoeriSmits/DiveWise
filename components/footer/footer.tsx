import Image from "next/image";

const Footer = ({}): JSX.Element => {
    return (
        <div className="flex justify-between items-center container mx-auto py-6 my-16 border-solid border-neutral-500 border-t">
            <Image src="/assets/images/logo.svg" alt="Footer" width={240} height={55} />
            <span className="text-neutral-600">© 2024 DiveWise Technical Diving</span>
        </div>
    );
}

export default Footer;