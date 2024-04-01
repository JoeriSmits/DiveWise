import BodyText from '@/components/bodytext/bodytext'
import type { NextPageWithLayout } from './_app'
import Layout from '@/components/layout'
import CLink from '@/components/clink/clink'

const Opleidingen: NextPageWithLayout = () => {
    return (
        <Layout>
            <div className="max-w-screen-md mx-auto">
                <BodyText title="Ontdek Duiken op Alle Niveaus met DiveWise Technical Diving" subtitle="Opleidingen">
                    <div className="space-y-4">
                        <p>Of u nu een beginnende recreatieve duiker bent of uw technische duikvaardigheden naar een hoger niveau wilt tillen, wij bieden een breed scala aan IANTD erkende opleidingen die aansluiten bij uw ambities en wensen.</p>
                        <p>Bij DiveWise Technical Diving begrijpen we dat elke duiker uniek is. Daarom hebben we onze opleidingen ingedeeld in vier kerngroepen, zodat u gemakkelijk de cursus kunt vinden die het beste bij uw doelen past:</p>

                        <h2 className="text-lg">1. Recreatieve en Technische Duikprogramma's</h2>
                        <p>Ontdek de onderwaterwereld met onze recreatieve en technische duikprogramma's. Van de basis als Open Water Diver tot geavanceerde technische cursussen zoals Trimix Diver. Of u nu kiest voor open circuit (OC) duiken of gesloten circuit (CCR) rebreather duiken, wij bieden de expertise die u nodig heeft om veilig en met vertrouwen te duiken.</p>

                        <h2 className="text-lg">2. IANTD Decompressie Software Specialist</h2>
                        <p>Verdiep uw kennis van decompressiesoftware. In dit programma leert u verschillende decompressiesoftware instellingen aan te passen, duikcomputers te gebruiken en de achterliggende algoritme modellen te begrijpen.</p>

                        <h2 className="text-lg">3. Nitrox & Trimix Gas Blender</h2>
                        <p>Word een meester in het vullen van Nitrox en Trimix gassen. Deze cursus leert u op een veilige manier om te gaan met zuurstof en helium en behandelt het zuurstofreinigen van duikflessen en kranen. Kies voor het gecombineerde programma of volg een gespecialiseerde cursus.</p>

                        <h2 className="text-lg">4. Leadership Duikprogramma's</h2>
                        <p>Streef naar excellence en word een duikprofessional. Onze leadership programma's omvatten Dive Master, Technical Diver Supervisor en verschillende instructeursniveaus, waaronder Open Water Instructor en Advanced Nitrox Instructor.</p>

                        <h2 className="text-lg">Kom verder</h2>
                        <p>Voor meer gedetailleerde informatie over onze cursussen, nodigen we u uit om <CLink href="/contact">contact met ons op te nemen</CLink>. Bij DiveWise Technical Diving zijn we toegewijd aan het bieden van kwalitatieve duikopleidingen. Sluit je bij ons aan en verken de onbegrensde mogelijkheden onder het wateroppervlak!</p>
                    </div>
                </BodyText>
            </div>
        </Layout>
    )
}


export default Opleidingen