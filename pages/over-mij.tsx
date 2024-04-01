import BodyText from '@/components/bodytext/bodytext'
import type { NextPageWithLayout } from './_app'
import Layout from '@/components/layout'
import Image from 'next/image'

const OverMij: NextPageWithLayout = () => {
    return (
        <Layout>
            <BodyText title="Maak kennis met Jos Smits" subtitle="Over mij">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <p>Mijn passie voor duiken ontvlamde al op jonge leeftijd, geïnspireerd door de legendarische onderwateravonturen van Jacques Cousteau. Deze passie leidde mij 45 jaar geleden naar mijn eerste duikervaringen bij een NOB-vereniging in Zuid-Nederland. Mijn duikavontuur begon echter niet alleen daar; mijn verlangen om de onderwaterwereld te verkennen was al veel eerder gewekt.</p>
                        <p>Mijn interesse verschoof in de late jaren &apos;90 naar de meer uitdagende aspecten van het duiken, waaronder technisch duiken met verschillende gasmengsels. Ik ben gepassioneerd over het overbrengen van het &apos;technisch duikvirus&apos; aan enthousiaste toekomstige technisch duikers, met cursussen variërend van open circuit duiken tot en met full trimix en rebreather opleidingen.</p>
                        <p>In 2004 zette ik een belangrijke stap door mijn eigen IANTD Facility, DiveWise Technical Diving, op te richten in Oost-Nederland. Hier zet ik mijn toewijding voort om duikers van alle niveaus te voorzien van hoogwaardige Technische Duik- en Rebreather opleidingen, en draag ik bij aan de groei en ontwikkeling van de duikgemeenschap.</p>
                    </div>
                    <Image className="w-full" src="/assets/images/jos_smits.jpg" width={592} height={450} alt="Photo of Jos Smits on a boat preparing for a dive" />
                </div>
            </BodyText>
        </Layout>
    )
}


export default OverMij