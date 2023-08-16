import React from 'react'
import Header from '../components/Header'
import Display from '../components/Display'
import TechDetails from '../components/TechDetails'
import Footer from '../components/Footer'
import Info from '../components/Info'

const HomePage = () => {
  return (
    <div>
      {<Header />}
      {<Display />}
      {<TechDetails />}
      {<Info />}
      {<Footer />}
    </div>
  )
}

export default HomePage