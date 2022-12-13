import React from 'react'
import { Link } from 'react-router-dom'

const Producto = ({ img, h5 }) => {
    return (

        <div className="card mx-0 m-md-2 my-2" style={{ width: "18rem" }} >
            <img src={img} className="card-img-top" alt={img} style={{ wdth: "100%" }} />
            <div className="card-body">
                <h5 className="card-title">{h5} </h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="btn-group d-none d-md-inline" role="group">
                    <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Consultar precio
                    </button>
                    <ul className="dropdown-menu">
                        <li className=''><a href={`https://api.whatsapp.com/send?phone=+541124971986&text=Hola, ¿Cuál es el precio de ${h5}?`} target='_blank' rel="noreferrer" className='dropdown-item text-center d-flex justify-content-center'>Whatsapp web <box-icon type='logo' name='whatsapp'></box-icon></a></li>
                        <li><Link className="dropdown-item text-center d-flex justify-content-center" to={`/contacto/Cuál es el precio del producto ${h5}?`}>Email <box-icon name='envelope'></box-icon></Link></li>
                    </ul>
                </div>
                <a href={`https://api.whatsapp.com/send?phone=+541124971986&text=Hola, ¿Cuál es el precio de ${h5}?`} target='_blank' rel="noreferrer" className='ms-3  d-md-none btn btn-success text-center'>Consultar precio <br></br> <box-icon type='logo' name='whatsapp'></box-icon></a>
            </div>
        </div>


    )
}

export default Producto