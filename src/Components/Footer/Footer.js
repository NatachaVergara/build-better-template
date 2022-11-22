import React from "react";
import Copyright from "./Copyright";
import FooterCol from "./FooterCol";
import footerLogo from '../../assets/images/footer-logo.png'

const Footer = () => {
  return (
   <>
    <footer className="footer_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-6">
            <div className="fooer_logo">
              <img src={footerLogo} alt='footerLogo' />
            </div>
            <p className="footer_lorem_text">
              There are many variat ions of passages of L orem Ipsum available, but the majority h ave suffered altera tion in some form, by
            </p>
          </div>
          <FooterCol
            h1="Necesitas Ayuda"
            p="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by"
          />
          <FooterCol
            h1="Nuestros Diseños"
            p="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by"
          />
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Ingresa tu mail" aria-label="Ingresa tu mail"
            aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2"><button className="btn btn-outline-light mb-1">Suscribite</button></span>
          </div>
        </div>
      </div>    
    </footer>
    <Copyright />
   </>
  );
};

export default Footer;
