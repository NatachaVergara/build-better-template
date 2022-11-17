import React from 'react'

const Mueblesitem = ({ img, a, h3, p }) => {
    return (
        <div className="col-md-6">
            <div className="container_main">
                <img src={img} alt="Avatar" className="image" />
                <div className="overlay">
                    <a href={a} className="icon" title="Ver producto">
                        <i className="fa fa-search"></i>
                    </a>
                </div>
            </div>
            <h3 className="temper_text">{h3} </h3>
            <p className="dololr_text">{p} </p>
        </div>
    )
}

export default Mueblesitem