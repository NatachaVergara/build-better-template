import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import logoWhatups from '../../assets/images/logo_whatsup.png'


const Header = () => {
  return (
    <>
      {/* <!-- header section start --> */}
      <div className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="logo"><a href="index.html"><img src={logo} alt='logo' /></a></div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/home">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/servicios">servicios</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">Sobre nosotros</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="shop.html">Productos</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contacto">Contacto</Link>
                </li>
              </ul>
              <div className="form-inline my-2 my-lg-0">
                <a href="https://api.whatsapp.com/send?phone=0123456789&text=Hola, Nececito más información!" target='_blank' rel='noreferrer' className='logo-whatsup'  >
                 <img src={logoWhatups} alt='logo whatsup' className='me-3 text-dark'/>
                     0123456789
                </a>
              </div>
              {/* <div className="search_icon">
                     <ul>
                        <li><a href="#"><img src="images/search-icon.png"></a></li>
                        <li><a href="#">LOGIN</a></li>
                     </ul>
                  </div> */}
            </div>
          </nav>
        </div>
      </div>
      {/* <!-- header section end --> */}
    </>
  )
}

export default Header