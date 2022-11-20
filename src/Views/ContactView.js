import React, { useEffect } from 'react'
import Contacto from '../Components/Contacto/Contacto'
import { gotoTop } from '../utils/functions';

const ContactView = () => {
  let title = 'Build Better - Contacto'
  document.title = title;
  useEffect(() => gotoTop(), []);

  return (
    <Contacto />
  )
}

export default ContactView