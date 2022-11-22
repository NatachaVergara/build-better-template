import React from 'react'
import img3 from '../../assets/images/img-3.png'


const About = () => {
  return (
    <main>
        {/* // <!-- about section start -->f */}
        <main className="about_section layout_padding">
            <div className="container ">
                <div className="row d-flex flex-column-reverse flex-md-row">
                    <div className="col-md-6">
                        <h1 className="about_text">Sobre Nosotros</h1>
                        <p className="lorem_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believableThere are many variations of passages of Lorem Ipsum available, but the majority have able</p>                       
                        <p className="lorem_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believableThere are many variations of passages of Lorem Ipsum available, but the majority have able</p>                       
                        <p className="lorem_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believableThere are many variations of passages of Lorem Ipsum available, but the majority have able</p>                       
                    </div>
                    <div className="col-md-6 mt-lg-5 pt-lg-5">
                        <div className="image_1"><img src={img3} alt={img3} /></div>
                    </div>
                </div>           
            </div>

        </main>
        {/* ///about section end  */}
    </main>
  )
}

export default About