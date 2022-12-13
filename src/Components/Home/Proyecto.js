import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { Link, useParams } from "react-router-dom";
import img1 from "../../assets/images/img-1.png";
import img2 from "../../assets/images/img-2.png";
import img3 from "../../assets/images/img-3.png";
import img4 from "../../assets/images/img-4.png";
import img5 from "../../assets/images/img-5.png";
import { gotoTop, title } from "../../utils/functions";

const Proyecto = () => {
  const { proyecto } = useParams();
  //let mensaje = `https://api.whatsapp.com/send?phone=0123456789&text=Hola, Nececito más información sobre ${proyecto}!`;
  title('Proyecto');
  useEffect(() => gotoTop());



  const fotos = [
    {
      id: 1,

      img: img1,
    },
    {
      id: 2,

      img: img2,
    },
    {
      id: 3,

      img: img3,
    },
    {
      id: 4,

      img: img4,
    },
    {
      id: 5,

      img: img5,
    },
  ];

  return (
    <main className="proyecto_section layout_padding d-flex justify-content-center align-items-center row">
      <div className="col-11 col-md-6 col-lg-5 proyecto-carousel">
        <Carousel showArrows={false} axis="horizontal" autoPlay>
          {fotos.map((foto) => (
            <div key={foto.id}>
              <img src={foto.img} alt={foto.img} style={{ width: "30rem" }} />
            </div>
          ))}
        </Carousel>
      </div>
      <div
        className="card border border-dark border-opacity-25 col-11 col-md-6 col-lg-5 proyecto-card"
        style={{ width: "18rem" }}
      >
        <div className="hide">
          <div className="card-body">
            <h5 className="card-title">{proyecto} </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className="list-group list-group-flush ul">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <div className="card-body">
            <div className="btn-group d-none d-md-inline" role="group">
              <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Consultar precio
              </button>
              <ul className="dropdown-menu">
                <li className=''><a href={`https://api.whatsapp.com/send?phone=+541124971986&text=Hola, Quiero info sobre ${proyecto}`} target='_blank' rel="noreferrer" className='dropdown-item text-center d-flex justify-content-center'>Whatsapp web <box-icon type='logo' name='whatsapp'></box-icon></a></li>
                <li><Link className="dropdown-item text-center d-flex justify-content-center" to={`/contacto/Hola, Quiero info sobre ${proyecto}`}>Email <box-icon name='envelope'></box-icon></Link></li>
              </ul>
            </div>
            <a href={`https://api.whatsapp.com/send?phone=+541124971986&text=Hola, Hola, Quiero info sobre ${proyecto}`} target='_blank' rel="noreferrer" className='ms-3 d-flex d-md-none justify-content-between align-items-center btn btn-success text-center w-100 '>Consultar <box-icon type='logo' name='whatsapp'></box-icon></a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Proyecto;
