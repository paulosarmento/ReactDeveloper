import type { NextPage } from 'next'
import Header from '../components/Home/Header'
import Banner from '../components/Home/Banner'
import Service from '../components/Home/Service'
import Contact from '../components/Home/Contact'
import Footer from '../components/Home/Footer'

const ComponentPage: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Service />
      <Contact />
      <Footer />      
    </>
  )
}

export default ComponentPage;
