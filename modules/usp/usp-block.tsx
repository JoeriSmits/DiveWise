import USP from "@/components/usp/usp";
import Image from "next/image";

const USPBlockModule = (): JSX.Element => {
    return (
        <div className="space-y-12">
            <div className="flex justify-center text-center flex-col space-y-3">
                <span className="subheading">Onze missie</span>
                <h2 className="max-w-xl mx-auto">Duik Dieper in Wat Ons Bijzonder Maakt!</h2>
            </div>

            <div className="grid grid-cols-3">
                <USP image="/assets/icons/smile.svg" alt="Icon of a smiley">
                    <h3>Veilig, informatief en plezierig</h3>
                    <p>Onze missie is het aanbieden en verzorgen van veilige, informatieve maar vooral plezierige Technische en Rebreather duikprogramma's.</p>
                </USP>
                <USP image="/assets/icons/shield.svg" alt="Icon of a shield">
                    <h3>Vertrouwen</h3>
                    <p>Deze opleidingsprogramma's zullen een ieder het vertrouwen geven om op een veilige en verantwoorde wijze te duiken in een mindere of meerdere uitdagende omgeving.</p>
                </USP>
                <USP image="/assets/icons/shaking-hands.svg" alt="Icon of shaking hands">
                    <h3>Persoonlijk</h3>
                    <p>Het werken met kleine groepen, waardoor een meer persoonlijke aanpak is gegarandeerd, kenmerkt onze benadering en heeft tot op heden al onze cursisten erg aangesproken.</p>
                </USP>
            </div>
        </div>
    );
}

export default USPBlockModule;