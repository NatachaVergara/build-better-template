import React from 'react'
import Producto from './Producto'
import './Productos.css'

import img2 from '../../assets/images/img-2.png'
import img3 from '../../assets/images/img-3.png'
import img4 from '../../assets/images/img-4-chica.png'
import img5 from '../../assets/images/img-5.png'
import img6 from '../../assets/images/img-6.png'
import img10 from '../../assets/images/img-10.jpg'
import img11 from '../../assets/images/img-11.jpg'
import img12 from '../../assets/images/img-12.jpg'
import img13 from '../../assets/images/img-13.jpg'


const Productos = () => {



    return (
        <main className='productos_section layout_padding bg-warning'>
            <div className='container'>
                <h1 className='productos_taital'>Productos</h1>
                <div className='row container'>
                    <div className='d-flex flex-wrap justify-content-center align-items-center'>                       
                       <Producto  img={img2} h5='Producto 2' />
                       <Producto  img={img3} h5='Producto 3' />
                       <Producto  img={img4} h5='Producto 4' />
                       <Producto  img={img5} h5='Producto 5' />
                       <Producto  img={img6} h5='Producto 6' />                      
                       <Producto  img={img10} h5='Producto 10' />                      
                       <Producto  img={img11} h5='Producto 11' />                      
                       <Producto  img={img12} h5='Producto 12' />                      
                       <Producto  img={img13} h5='Producto 13' />                      
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Productos