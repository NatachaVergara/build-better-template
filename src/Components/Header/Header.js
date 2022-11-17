import React from 'react'
import logo from '../../assets/images/logo.png'


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
                  <a className="nav-link" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="services.html">servicios</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">Sobre nosotros</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="shop.html">Productos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contacto</a>
                </li>
              </ul>
              <div className="form-inline my-2 my-lg-0">
                <h1 className="call_text">Contacto : 1234567890</h1>
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