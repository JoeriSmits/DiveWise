import BodyText from '@/components/bodytext/bodytext'
import type { NextPageWithLayout } from './_app'
import Layout from '@/components/layout'
import CLink from '@/components/clink/clink'

const Contact: NextPageWithLayout = () => {
    return (
        <Layout>
            <div className="max-w-screen-md mx-auto">
                <BodyText title="Begin je nieuwe duikavontuur - We horen graag van je!" subtitle="Contact">
                    <div className="space-y-4">

                        <h2 className="text-lg">Onze locatie</h2>
                        <p>
                            DiveWise Technical Diving<br />
                            IANTD Training Facility # 1098<br />
                            De Balmerd 92<br />
                            6641 LE Beuningen<br />
                            Nederland
                        </p>

                        <h2 className="text-lg">Contactgegevens</h2>
                        <p>Heb je vragen of wil je meer informatie? Wij staan altijd klaar om al je vragen te beantwoorden en je te helpen met je duikbehoeften.</p>
                        <p>
                            Telefoon: <CLink href="tel:+31 (0)24-6772696">+31 (0)24-6772696</CLink><br />
                            Mobiel: <CLink href="tel:+31 (0)6-53978987">+31 (0)6-53978987</CLink><br />
                            E-mail: <CLink href="mailto:technicaldiving@divewise.nl">technicaldiving@divewise.nl</CLink>
                        </p>
                        <p>Bij DiveWise Technical Diving zijn we toegewijd aan het bieden van topkwaliteit duikopleidingen en -ervaringen. Neem vandaag nog contact met ons op en zet de volgende stap naar jouw nieuwe duikavontuur!</p>
                    </div>
                </BodyText>
            </div>
        </Layout>
    )
}


export default Contact