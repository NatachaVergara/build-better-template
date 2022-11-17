import React from 'react'

const CarouselItem = ({ h1, p, a, active }) => {
    return (
        <div className={`carousel-item ${active}`}>
            <h1 className="furniture_text"> {h1} </h1>
            <p className="there_text">{p}  </p>
            <div className="contact_bt_main">
                <div className="contact_bt"><a href="contact.html">{a} </a></div>
            </div>
        </div>
    )
}

export default CarouselItem