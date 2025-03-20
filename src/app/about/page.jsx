import React from 'react'
import Banner from '../components/banner'
import AboutSection from '../components/about'
import Appointment from '../components/appointment'
import Menu from '../components/menu'

const Page = () => {
  return (
    <>

   <Banner breadcrumbs={"About"} heading={"About Us"}/>

   <AboutSection/>

   <Appointment/>

   <Menu className="hidden"/>



    </>
  )
}

export default Page
