import Button from "@/components/button/button";
import Image from "next/image";
import Link from "next/link";

const HeroHeaderModule = (): JSX.Element => {
    return (
        <div className="grid justify-between items-center grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-0 md:gap-x-8">
            <div className="max-w-2xl space-y-6">
                <span className="subheading">DiveWise Technical Diving</span>
                <h1>Dé Duikschool voor Technische Duik- en Rebreather Opleidingen in Nederland!</h1>
                <h2 className="text text-lg font-normal">Veilig, Kleinschalig en Persoonlijk - Wij Brengen Vertrouwen en Plezier in Je Duikavontuur!</h2>

                <div>
                    <Link href="/opleidingen">
                        <Button>Bekijk onze opleidingen</Button>
                    </Link>
                </div>
            </div>
            <Image className="w-full" src="/assets/images/hero-header-diver.jpg" alt="A diver with a rebreather taking a photo of a ship wreck" width={592} height={592} />
        </div>
    );
}

export default HeroHeaderModule;