import React from 'react'
import CarouselItem from './CarouselItem'

const Banner = () => {
    return (
        <>
            {/* <!-- banner section start --> */}
            <div className="banner_section layout_padding  banner_layout_padding">
                <div className="container">
                    <div id="z" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <CarouselItem h1='Muebles' p='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some fo' active='active' />
                            <CarouselItem h1='Baño' p='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some fo' />
                            <CarouselItem h1='Cocina' p='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some fo'  />
                        </div>                        
                    </div>
                </div>
            </div>
            {/* <!-- banner section end --> */}

        </>
    )
}

export default Banner