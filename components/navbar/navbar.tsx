import Image from 'next/image'
import Link from 'next/link';

const NavBar = ({}): JSX.Element => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center container mx-auto py-3 space-y-6 md:space-y-0 my-4 md:my-0" role="navigation">
            <Link href="/">
                <Image src="/assets/images/logo.svg" width={250} height={56} alt="Logo image of DiveWise Technical Diving" />
            </Link>

            <div className="flex space-x-2 md:space-x-8 text-neutral-800">
                <Link href="/">Home</Link>
                <Link href="/missie">Missie</Link>
                <Link href="/opleidingen">Opleidingen</Link>
                <Link href="/over-mij">Over Mij</Link>
                <Link href="/prijzen">Prijzen</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </div>
    );
}

export default NavBar;