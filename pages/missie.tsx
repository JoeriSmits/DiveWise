import BodyText from '@/components/bodytext/bodytext'
import type { NextPageWithLayout } from './_app'
import Layout from '@/components/layout'
import Image from 'next/image'

const OverMij: NextPageWithLayout = () => {
    return (
        <Layout>
            <div className="max-w-screen-md mx-auto">
                <BodyText title="Twee Decennia lang Technisch Duiken - Jouw Partner in Veiligheid en Avontuur" subtitle="Missie">
                    <div className="space-y-4">
                        <p>In de diepe, onontgonnen wateren van de technische duikwereld staat Divewise al meer dan twintig jaar als een baken van innovatie en deskundigheid. Onze toewijding aan het verrijken van de duikervaring gaat verder dan het gewone; wij streven ernaar om elke duik niet alleen veilig maar ook informatief en opwindend te maken. Als vooraanstaande specialisten in technisch duiken, onderscheiden we ons door een diepgaande focus op geavanceerde duiktechnieken, veiligheidsprotocollen en milieubewustzijn. Deze unieke combinatie stelt ons in staat om een duikervaring te bieden die zowel uitdagend als uiterst belonend is, afgestemd op de individuele doelstellingen en vaardigheidsniveaus van onze cursisten. Bij Divewise geloven we in het bouwen aan een solide fundament van vertrouwen en kennis, essentieel voor het verkennen van de onderwaterwereld op een veilige en verantwoorde manier.</p>
                        <Image src="/assets/images/rebreather_walking.jpg" width={800} height={450} alt="Photo of a JJ-CCR rebreather from behind, diver is walking" />
                        <h2 className="text-lg">Jouw Pad Naar Expertise en Avontuur met Divewise</h2>
                        <p>Onze benadering van technisch duiken gaat verder dan het traditionele leerproces; het is een holistische ervaring die is ontworpen om duikers te transformeren in zelfverzekerde, bekwame onderwaterontdekkers. Met kleine groepen en een focus op persoonlijke aandacht, zorgt Divewise ervoor dat elke duiker de nodige begeleiding en ondersteuning krijgt om hun vaardigheden te ontwikkelen en te verfijnen. Ons curriculum omvat een breed scala aan cursussen, van introductielessen in technisch duiken tot geavanceerde specialisaties zoals grotduiken, wrakduiken en diepzeeduiken, allemaal onderwezen door ervaren instructeurs met een passie voor duiken en een ongeëvenaarde kennis van de onderwaterwereld.</p>
                        <p>Bij Divewise begrijpen we dat veiligheid en kennis hand in hand gaan. Daarom leggen we een sterke nadruk op milieubewustzijn en het behoud van de onderwateromgeving, zodat toekomstige generaties ook van de wonderen van de oceaan kunnen genieten. Onze cursussen zijn zorgvuldig ontworpen om niet alleen technische vaardigheden te verbeteren maar ook om duikers bewust te maken van de impact die ze hebben op de mariene ecosystemen.</p>
                        <p>Door deel te nemen aan onze programma's, worden duikers onderdeel van een exclusieve gemeenschap die de lat hoger legt in de wereld van het technisch duiken. Divewise is niet alleen je duikschool; het is je partner in avontuur, een plek waar je wordt uitgedaagd om je grenzen te verleggen en nieuwe, adembenemende onderwaterlandschappen te ontdekken. Met Divewise duik je niet alleen in de diepte; je duikt in een leven van eindeloze ontdekkingen en avonturen, ondersteund door onze toewijding aan uitmuntendheid en een voortdurende passie voor de zee.</p>
                        <p>Dit is de wereld van Divewise – waar jouw passie voor technisch duiken wordt versterkt door onze expertise, innovatie en een onwrikbare toewijding aan het creëren van een veilige, verrijkende en onvergetelijke duikervaring.</p>
                    </div>
                </BodyText>
            </div>
        </Layout>
    )
}


export default OverMij