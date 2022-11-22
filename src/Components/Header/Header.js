import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import logoWhatups from '../../assets/images/logo_whatsup.png'


const Header = () => {
  return (
    <>
      {/* <!-- header section start --> */}
      <div class="header_section">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="logo"><Link to='/'><img src={logo} alt='logo' /></Link></div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <Link class="nav-link" to="/home">Inicio</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/servicios">servicios</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/about">Sobre nosotros</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/productos">Productos</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/contacto">Contacto</Link>
                </li>
              </ul>
              <div className="form-inline my-2 my-lg-0 logo-whatsup">
                <a href="https://api.whatsapp.com/send?phone=0123456789&text=Hola, Nececito más información!" target='_blank' rel='noreferrer' className='logo-whatsup'  >
                  <img src={logoWhatups} alt='logo whatsup' className='me-3 text-dark' />
                  0123456789
                </a>
              </div>
              {/* <form class="form-inline my-2 my-lg-0">
                  <h1 class="call_text">Call Us : +01 1234567890</h1>
               </form>
               <div class="search_icon">
                  <ul>
                     <li><a to="#"><img src="images/search-icon.png"/></a></li>
                     <li><a to="#">LOGIN</a></li>
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