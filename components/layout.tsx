import Navbar from './navbar/navbar'
import Footer from './footer/footer'
 
export default function Layout({ children }: any) {
  return (
    <>
      <Navbar/>
      <main className="container mx-auto">{children}</main>
      <Footer />
    </>
  )
}