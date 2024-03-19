import Image from "next/image";

const QuoteModule = ({ className }: { className?: string }): JSX.Element => {
    console.log(className);
    return (
        <div className={`w-full relative pl-12 pt-16 flex space-x-8 ${className}`}>
            <Image src="/assets/icons/quote.svg" alt="Quote" width={50} height={50} className="mx-auto left-0 top-16 absolute" />

            <blockquote className="space-y-6">
                <h3>Duiken met JJ-CCR Rebreathers in Hemmoor: Een Avontuurlijke Opleiding met Onvergetelijke Duiken tot 60 Meter Diepte!</h3>
                <p>Samen met Roel heb ik recentelijk de JJ-CCR rebreather duikopleiding in Hemmoor, Noord-Duitsland voltooid. Ondanks een last-minute annulering van een cursist, heeft Jos alles geregeld zodat we konden deelnemen. We hebben diepe duiken gemaakt, met de laatste duik op 60 meter diepte waar we 20 minuten op de bodem doorbrachten. Een fantastische ervaring die een gedegen voorbereiding en de juiste mindset vereiste.</p>
                
                <div className="flex flex-col">
                    <strong>Jan Mulder</strong>
                    <span>JJ-CCR Normoxic Trimix</span>
                </div>
            </blockquote>

            <Image src="/assets/images/quotes/jan_mulder.jpg" alt="Jan Mulder" width={555} height={368}/>
        </div>
    );
}

export default QuoteModule;