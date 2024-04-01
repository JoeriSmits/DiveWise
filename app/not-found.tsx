import BodyText from '@/components/bodytext/bodytext'
import type { NextPageWithLayout } from '../pages/_app'
import Layout from '@/components/layout'
import CLink from '@/components/clink/clink'
import '@/app/globals.css'

const NotFound: NextPageWithLayout = () => {
    return (
        <html>
            <body>
                <Layout>
                    <div className="max-w-screen-md mx-auto">
                        <BodyText title="Deze pagina is niet gevonden of bestaat niet meer" subtitle="Whoops...">
                            <div className="space-y-4">
                                <p>De pagina die je probeert te bereiken, bestaat niet of is verplaatst. Misschien kun je terugkeren naar de <CLink href="/">homepage</CLink> en vanaf daar verder navigeren.</p>
                            </div>
                        </BodyText>
                    </div>
                </Layout>
            </body>
        </html>
    )
}

export default NotFound