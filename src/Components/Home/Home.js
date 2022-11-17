import React from 'react'
import Header from '../Header/Header'
import AboutUs from './AboutUs'
import Banner from './Banner'
import Muebles from './Muebles'
import Proyectos from './Proyectos'
import Servicios from './Servicios'

const Home = () => {
  return (
    <main>
      <Header />
      <Banner />
      <Servicios/>
      <AboutUs/>
      <Muebles/>
      <Proyectos/>
    </main>
  )
}

export default Home