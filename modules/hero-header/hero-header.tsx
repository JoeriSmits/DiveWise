import Button from "@/components/button/button";
import Image from "next/image";

const HeroHeaderModule = (): JSX.Element => {
    return (
        <div className="flex justify-between items-center">
            <div className="max-w-2xl space-y-6">
                <span className="subheading">DiveWise Technical Diving</span>
                <h1>Dé Duikschool voor Technische Duik- en Rebreather Opleidingen in Nederland!</h1>
                <h2 className="text text-lg font-normal">Veilig, Kleinschalig en Persoonlijk - Wij Brengen Vertrouwen en Plezier in Je Duikavontuur!</h2>
                <Button>Bekijk onze opleidingen</Button>
            </div>
            <Image src="/assets/images/hero-header-diver.jpg" alt="A diver with a rebreather taking a photo of a ship wreck" width={592} height={592} />
        </div>
    );
}

export default HeroHeaderModule;