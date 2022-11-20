import React from 'react'
import left_arrow from '../../assets/images/left-arrow.png'
import rigth_arrow from '../../assets/images/right-arrow.png'
import CarouselItem from './CarouselItem'

const Banner = () => {
    return (
        <>
            {/* <!-- banner section start --> */}
            <div className="banner_section layout_padding">
                <div className="container">
                    <div id="z" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <CarouselItem h1='Muebles' p='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some fo' active='active' />
                            <CarouselItem h1='Baño' p='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some fo' />
                            <CarouselItem h1='Cocina' p='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some fo'  />
                        </div>
                        <a className="carousel-control-prev" href="#costum_slider" role="button" data-slide="prev">
                            <i className=""><img src={left_arrow} alt='left_arrow' /></i>
                        </a>
                        <a className="carousel-control-next" href="#costum_slider" role="button" data-slide="next">
                            <i className=""><img src={rigth_arrow} alt='rigth_arrow' /></i>
                        </a>
                    </div>
                </div>
            </div>
            {/* <!-- banner section end --> */}

        </>
    )
}

export default Banner