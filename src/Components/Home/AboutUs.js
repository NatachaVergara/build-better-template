import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../assets/images/img-1.png'


const AboutUs = () => {
    return (
        // <!-- about section start -->f
        <div className="about_section layout_padding" data-aos="fade-left">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="about_text">Sobre Nosotros</h1>
                        <p className="lorem_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believableThere are many variations of passages of Lorem Ipsum available, but the majority have able</p>
                        <div className="read_bt1"><Link to="/about">Leer más...</Link></div>
                    </div>
                    <div className="col-md-6">
                        <div className="image_1"><img src={img1} alt={img1} /></div>
                    </div>
                </div>
            </div>
        </div>
        ///about section end 
    )
}

export default AboutUs