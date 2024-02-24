import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Layout from '@/components/layout'
import HeroHeader from '@/modules/hero-header/hero-header'
 
const Page: NextPageWithLayout = () => {
  return <p>hello world</p>
}
 
Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <HeroHeader/>
    </Layout>
  )
}
 
export default Page