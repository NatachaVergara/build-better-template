import React, { useEffect } from 'react'
import Servicios from '../Components/Servicios/Servicios'
import { gotoTop, title } from '../utils/functions'

const ServiciosView = () => {
    title('Servicios');
    useEffect(()=> gotoTop());
  return (
    <Servicios/>
  )
}

export default ServiciosView