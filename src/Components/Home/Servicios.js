import React from 'react'
import icon1 from '../../assets/images/icon-1.png'
import icon2 from '../../assets/images/icon-2.png'
import icon3 from '../../assets/images/icon-3.png'
import icon4 from '../../assets/images/icon-4.png'
import ServiceItem from './ServiceItem'


const Servicios = () => {
    return (
        // <!-- services section start -->
        <div className="services_section ">
            <div className="container">
                <h1 className="services_taital">Servicios</h1>
                <p className="many_taital">There are many variations of passages of Lorem Ipsum </p>
                <div className="services_section2 layout_padding">
                    <div className="row">
                        <ServiceItem
                            h2='Muebles'
                            p='There are many variations of passages of Lorem Ipsum available, but the'
                            a='Leer más..'
                            img={icon1} />
                        <ServiceItem
                            h2='Oficina'
                            p='There are many variations of passages of Lorem Ipsum available, but the'
                            a='Leer más..'
                            img={icon2} />
                        <ServiceItem
                            h2='Casa'
                            p='There are many variations of passages of Lorem Ipsum available, but the'
                            a='Leer más..'
                            img={icon3} />
                        <ServiceItem
                            h2='Habitaciones'
                            p='There are many variations of passages of Lorem Ipsum available, but the'
                            a='Leer más..'
                            img={icon4} />
                    </div>
                </div>
            </div>
        </div>
        // <!-- services section end -->
    )
}

export default Servicios