import React from 'react'
import img9 from '../../assets/images/img-9.png'


const Contacto = () => {
   return (
      //  <!-- contact section start -->
      <main className="contact_section layout_padding" id='contacto'>
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <h1 className="contact_text">CONTACTANOS</h1>
                  <div className="mail_sectin">
                     <form>
                        <input type="text" className="email-bt" placeholder="Nombre*" name="Name" required />
                        <input type="mail" className="email-bt" placeholder="Email*" name="Name" required />
                        <input type="text" className="email-bt" placeholder="Número tel" name="Name" />
                        <textarea className="massage-bt" placeholder="Mensaje*" rows="5" id="comment" name="Massage" required></textarea>
                        <div className="send_bt"><button type='submit'>ENVIAR</button></div>
                     </form>
                  </div>
               </div>
               <div className="col-md-6 d-none d-md-flex ">
                  <div className="image_9"><img src={img9} alt='imagenCocina' /></div>
               </div>
            </div>
         </div>
      </main>
   )
}

export default Contacto