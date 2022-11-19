import React from 'react'

const FooterCol = ({ h1, p }) => {
    return (
        <div className="col-lg-3 col-sm-6">
            <h1 className="customer_text">{h1} </h1>
            <p className="footer_lorem_text">{p}</p>
        </div>
    )
}

export default FooterCol