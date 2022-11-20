import React, { useEffect } from 'react'
import About from '../Components/About/About'
import { gotoTop, title } from '../utils/functions';

const AboutView = () => {
    title('Sobre Nosotros');
    useEffect(() =>  gotoTop() , []);

    return (
        <About />
    )
}

export default AboutView