import React from 'react'
import { Link } from 'react-router-dom'

const CarouselItem = ({ h1, p, active }) => {
    return (
        <div className={`carousel-item ${active}`}>
            <h1 className="furniture_title"> {h1} </h1>
            <p className="there_text">{p}  </p>
            <div className="contact_bt_main">
                <div className="contact_bt"><Link to='/contacto' >Contacto </Link></div>
            </div>
        </div>
    )
}

export default CarouselItem