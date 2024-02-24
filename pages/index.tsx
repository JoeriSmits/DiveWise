import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Layout from '@/components/layout'
import HeroHeaderModule from '@/modules/hero-header/hero-header'
import USPBlockModule from '@/modules/usp/usp-block'
 
const Page: NextPageWithLayout = () => {
  return <p>hello world</p>
}
 
Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <HeroHeaderModule/>
      <USPBlockModule/>
    </Layout>
  )
}
 
export default Page