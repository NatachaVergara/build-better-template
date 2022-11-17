import React from 'react'

const ServiceItem = ({h2, p, a, img}) => {
    return (
        <div className="col-lg-3 col-sm-6">
            <div className="icon_1"><img src={img} alt={`icono de ${img}`} /></div>
            <h2 className="furnitures_text">{h2} </h2>
            <p className="dummy_text">{p} </p>
            <div className="read_bt_main">
                <div className="read_bt"><a href="/home"> {a} </a></div>
            </div>
        </div>
    )
}

export default ServiceItem