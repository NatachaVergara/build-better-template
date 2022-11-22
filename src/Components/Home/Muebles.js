import React from 'react'
import Mueblesitem from './Mueblesitem'

import img2 from '../../assets/images/img-2.png'
import img3 from '../../assets/images/img-3.png'


const Muebles = () => {
    return (
        // <!-- furnitures section start -->
        <div className="furnitures_section layout_padding">
            <div className="container">
                <h1 className="our_text">Nuestros  muebles</h1>
                <p className="ipsum_text">There are many variations of passages of Lorem Ipsum </p>
                <div className="furnitures_section2 layout_padding">
                    <div className="row">
                        <Mueblesitem
                            img={img2}
                            a='/productos'
                            h3='Tempor incididunt ut labore et dolore'
                            p='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'

                        />
                        <Mueblesitem
                            img={img3}
                            a='/productos3'
                            h3='Tempor incididunt ut labore et dolore'
                            p='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
                        />
                    </div>
                </div>
            </div>
        </div>
        // {/* <!-- furnitures section end --> */}
    )
}

export default Muebles