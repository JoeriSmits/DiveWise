import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Layout from '@/components/layout'
import HeroHeaderModule from '@/modules/hero-header/hero-header'
import USPBlockModule from '@/modules/usp/usp-block'
import QuoteModule from '@/modules/quote/quote'
 
const Page: NextPageWithLayout = () => {
  return <p>hello world</p>
}
 
Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <HeroHeaderModule/>
      <USPBlockModule/>
      <QuoteModule/>
    </Layout>
  )
}
 
export default Page