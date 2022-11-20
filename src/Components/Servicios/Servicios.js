import React from 'react'
import icon1 from '../../assets/images/icon-1.png'
import icon2 from '../../assets/images/icon-2.png'
import icon3 from '../../assets/images/icon-3.png'
import icon4 from '../../assets/images/icon-4.png'
import './Servicios.css'

const Servicios = () => {



    return (

        // <!-- services section start -->
        <div className="services_section layout_padding">
            <div className="container">
                <h1 className="services_taital">Servicios</h1>
                <p className="many_taital">Ofrecemos una gran variedad de servicios personalizados en </p>
                <div className="services_section2 layout_padding">
                    <div className="row">
                        <div className="col-12 sercicioBody ">
                            <div className='body'>
                                <h2 className="furnitures_text">Muebles en general</h2>
                                <p className="dummy_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                {/* <ul className='text-center'>
                                    <li>Lorem </li>
                                    <li>Lorem </li>
                                    <li>Lorem </li>
                                    <li>Lorem </li>
                                </ul> */}
                               
                            </div>
                            <div className="icon_1"><img src={icon1} alt={icon1} />
                            </div>
                        </div>
                        <div className="col-12 sercicioBody">
                            <div className="icon_1"><img src={icon2} alt={icon2} />
                            </div>
                            <div className='body'>
                                <h2 className="furnitures_text">Oficina</h2>
                                <p className="dummy_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                {/* <ul className='text-center'>
                                    <li>Lorem </li>
                                    <li>Lorem </li>
                                    <li>Lorem </li>
                                    <li>Lorem </li>
                                </ul> */}
                            </div>
                        </div>
                        <div className="col-12 sercicioBody">
                            <div className='body'>
                                <h2 className="furnitures_text">Casa</h2>
                                <p className="dummy_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                {/* <ul className='text-center'>
                                    <li>Lorem </li>
                                    <li>Lorem </li>
                                    <li>Lorem </li>
                                    <li>Lorem </li>
                                </ul> */}
                            </div>
                            <div className="icon_1"><img src={icon3} alt={icon3} />
                            </div>
                        </div>
                        <div className="col-12 sercicioBody">
                            <div className="icon_1"><img src={icon4} alt={icon4} />
                            </div>
                            <div className='body'>
                                <h2 className="furnitures_text">Habitaciones</h2>
                                <p className="dummy_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                {/* <ul className='text-center'>
                                    <li>Lorem </li>
                                    <li>Lorem </li>
                                    <li>Lorem </li>
                                    <li>Lorem </li>
                                </ul> */}
                            </div>

                        </div>




                    </div>



                </div>
            </div>
        </div>
        // <!-- services section end -->

    )
}

export default Servicios