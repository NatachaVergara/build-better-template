import React from 'react'
import { Link } from 'react-router-dom'
import img4 from '../../assets/images/img-4.png'
import img5 from '../../assets/images/img-5.png'
import img6 from '../../assets/images/img-6.png'


const Proyectos = () => {
    return (
        // <!-- projects section start -->
        <div className="projects_section layout_padding">
            <div className="container">
                <h1 className="our_text">Nuestros Proyectos</h1>
                <p className="ipsum_text">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                <div id="main_slider" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="projects_section2">
                                <div className="container_main2">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="container_main1">
                                                <img src={img4} alt="Avatar" className="image" style={{ width: "100%" }} />
                                                <h1 className="modern_text">Proyecto 1</h1>
                                                <div className="middle">
                                                    <Link to='/proyecto/proyecto 1' className="text">Ver proyecto</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="container_main1">
                                                <img src={img5} alt="Avatar" className="image" style={{ width: "100%" }} />
                                                <h1 className="modern_text">Proyecto 2</h1>
                                                <div className="middle">
                                                    <Link to='/proyecto/proyecto 2' className="text">Ver proyecto</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="container_main1">
                                                <img src={img6} alt="Avatar" className="image" style={{ width: "100%" }} />
                                                <h1 className="modern_text">Proyecto 3</h1>
                                                <div className="middle">
                                                    <Link to='/proyecto/proyecto 3' className="text">Ver proyecto</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="projects_section2">
                                <div className="container_main1">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="container_main1">
                                                <img src={img4} alt="Avatar" className="image" style={{ width: "100%" }} />
                                                <h1 className="modern_text">Proyecto 1</h1>
                                                <div className="middle">
                                                    <Link to='/proyecto/proyecto 1' className="text">Ver proyecto</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="container_main1">
                                                <img src={img5} alt="Avatar" className="image" style={{ width: "100%" }} />
                                                <h1 className="modern_text">Proyecto 2</h1>
                                                <div className="middle">
                                                    <Link to='/proyecto/proyecto 2' className="text">Ver proyecto</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="container_main1">
                                                <img src={img6} alt="Avatar" className="image" style={{ width: "100%" }} />
                                                <h1 className="modern_text">Proyecto 3</h1>
                                                <div className="middle">
                                                    <Link to='/proyecto/proyecto 3' className="text">Ver proyecto</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="projects_section2">
                                <div className="container_main1">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="container_main1">
                                                <img src={img4} alt="Avatar" className="image" style={{ width: "100%" }} />
                                                <h1 className="modern_text">Proyecto 1</h1>
                                                <div className="middle">
                                                    <Link to='/productos' className="text">Ver proyecto</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="container_main1">
                                                <img src={img5} alt="Avatar" className="image" style={{ width: "100%" }} />
                                                <h1 className="modern_text">Proyecto 2</h1>
                                                <div className="middle">
                                                    <Link to='/productos' className="text">Ver proyecto</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="container_main1">
                                                <img src={img6} alt="Avatar" className="image" style={{ width: "100%" }} />
                                                <h1 className="modern_text">Proyecto 3</h1>
                                                <div className="middle">
                                                    <Link href="#" className="text">Ver proyecto</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                        <i className="fa fa-angle-left"></i>
                    </a>
                    <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                        <i className="fa fa-angle-right"></i>
                    </a>
                </div>
            </div>
        </div>
        //<!-- projects section end -->
    )
}

export default Proyectos