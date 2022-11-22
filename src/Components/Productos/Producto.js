import React from 'react'

const Producto = ({img, h5}) => {
    return (

        <div className="card mx-2 my-2" style={{width: "18rem"}}>
            <img src={img} className="card-img-top" alt={img} style={{wdth: "100%"}}/>
            <div className="card-body">
                <h5 className="card-title">{h5} </h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>


    )
}

export default Producto