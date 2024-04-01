import BodyText from '@/components/bodytext/bodytext'
import type { NextPageWithLayout } from './_app'
import Layout from '@/components/layout'
import CLink from '@/components/clink/clink'

const Prijzen: NextPageWithLayout = () => {
    return (
        <Layout>
            <div className="max-w-screen-md mx-auto">
                <BodyText title="DiveWise Prijzenlijst 2024" subtitle="Prijzen">
                    <div className="space-y-4">
                        <p>Onze uitgebreide prijslijst voor het jaar 2024 biedt een scala aan cursussen die aan uw behoeften voldoen. Van recreatieve duikopleidingen tot geavanceerde technische en rebreather cursussen. Onze prijzen zijn volledig transparant, zodat u precies weet wat te verwachten.</p>
                        <p>Alle prijzen zijn in EURO (incl. BTW), inclusief lesmateriaal, exclusief gassen, en exclusief vervoer naar/van duikplaats, bootvervoer (indien van toepassing).</p>
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th colSpan={2} className="text-right">Prijs (incl. BTW)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td colSpan={2}><h2 className="text-lg">Recreatieve Duikopleidingen</h2></td></tr>
                                <tr><td>Openwater Diver</td><td className="text-right">€450,-</td></tr>
                                <tr><td>Advanced Open Water Diver</td><td className="text-right">€395,-</td></tr>
                                <tr><td>Rescue Diver</td><td className="text-right">€395,-</td></tr>
                                <tr><td>Nitrox Diver</td><td className="text-right">€250,-</td></tr>
                                <tr><td>Advanced Nitrox Diver</td><td className="text-right">€550,-</td></tr>
                                <tr><td>Recreational Trimix Diver</td><td className="text-right">€395,-</td></tr>
                                <tr><td>Adv. Recr. Trimix Diver - TekLite</td><td className="text-right">€595,-</td></tr>
                                <tr><td>Diver First Aid/O2 Provider</td><td className="text-right">€225,-</td></tr>

                                <tr><td colSpan={2}><h2 className="text-lg">Technische Duikopleidingen</h2></td></tr>
                                <tr><td>Normoxic Trimix Diver</td><td className="text-right">€950,-</td></tr>
                                <tr><td>Full Trimix Diver</td><td className="text-right">€950,-</td></tr>
                                <tr><td>Nitrox/Trimix Blender</td><td className="text-right">€325,-</td></tr>
                                <tr><td>Decompressie Software Specialist</td><td className="text-right">€250,-</td></tr>

                                <tr><td colSpan={2}><h2 className="text-lg">Combi’s</h2></td></tr>
                                <tr><td>Advanced Nitrox + Normoxic Trimix</td><td className="text-right">€1400,-</td></tr>
                                <tr><td>Normoxic & Full Trimix Diver</td><td className="text-right">€1750,-</td></tr>

                                <tr><td colSpan={2}><h2 className="text-lg">Rebreather Duikopleidingen</h2></td></tr>
                                <tr><td>Inspiration CCR Rebreather Diver</td><td className="text-right">€950,-</td></tr>
                                <tr><td>Inspiration Normoxic Trimix Diver</td><td className="text-right">€950,-</td></tr>
                                <tr><td>Inspiration Trimix Diver</td><td className="text-right">€950,-</td></tr>
                                <tr><td>JJ- CCR Level 1 Rebreather Diver</td><td className="text-right">€950,-</td></tr>
                                <tr><td>JJ- CCR Level 2 Normoxic Trimix Diver</td><td className="text-right">€950,-</td></tr>
                                <tr><td>JJ- CCR Level 3 Trimix Diver</td><td className="text-right">€950,-</td></tr>
                                <tr><td colSpan={2} className="text-sm italic">excl gassen, sofnolime en entree indoor duik facility.</td></tr>

                                <tr><td colSpan={2}><h2 className="text-lg">Instructor & Divemaster/Supervisor Opleidingen</h2></td></tr>
                                <tr><td>Divemaster</td><td className="text-right">€800,-</td></tr>
                                <tr><td>Divemaster Cross Over</td><td className="text-right">€700,-</td></tr>
                                <tr><td>Technical/Normoxic Supervisor</td><td className="text-right">€600,-</td></tr>
                                <tr><td>Trimix Supervisor</td><td className="text-right">€600,-</td></tr>
                                <tr><td>Open Water Instructor</td><td className="text-right">€1450,-</td></tr>
                                <tr><td>Adv Nitrox/Adv Recr. Trimix Instr. (IDC)</td><td className="text-right">€1450,-</td></tr>
                                <tr><td>Adv Nitrox Instructor Cross Over (IEC)</td><td className="text-right">€1050,-</td></tr>
                                <tr><td>Technical/Normoxic Trimix Instructor</td><td className="text-right">€1050,-</td></tr>
                                <tr><td>Nitrox/Trimix Blender Instructor</td><td className="text-right">€850,-</td></tr>
                            </tbody>
                        </table>
                    </div>
                </BodyText>
            </div>
        </Layout>
    )
}


export default Prijzen