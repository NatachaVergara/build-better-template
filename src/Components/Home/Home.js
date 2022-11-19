import React from 'react';
import Contacto from '../Contacto/Contacto';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Muebles from './Muebles';
import Proyectos from './Proyectos';
import Servicios from './Servicios';

const Home = () => {
  return (
    <main>      
      <Banner />
      <Servicios/>
      <AboutUs/>
      <Muebles/>
      <Proyectos/>
      <Contacto/>
    </main>
  )
}

export default Home