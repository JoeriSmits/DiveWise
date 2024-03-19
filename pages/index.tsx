import type { NextPageWithLayout } from './_app'
import Layout from '@/components/layout'
import HeroHeaderModule from '@/modules/hero-header/hero-header'
import USPBlockModule from '@/modules/usp/usp-block'
import QuoteModule from '@/modules/quote/quote'
 
const Home: NextPageWithLayout = () => {
  return (
    <Layout>
      <HeroHeaderModule/>
      <USPBlockModule/>
      <QuoteModule/>
    </Layout>
  )
}

 
export default Home