import Image from 'next/image'

const NavBar = ({}): JSX.Element => {
    return (
        <div className="flex justify-between items-center container mx-auto py-3" role="navigation">
            <Image src="/assets/images/logo.svg" width={250} height={56} alt="Logo image of DiveWise Technical Diving" />

            <div className="flex space-x-8 text-neutral-800">
                <a href="#">Home</a>
                <a href="#">Missie</a>
                <a href="#">Opleidingen</a>
                <a href="#">Over Ons</a>
                <a href="#">Prijzen</a>
                <a href="#">Contact</a>
            </div>
        </div>
    );
}

export default NavBar;