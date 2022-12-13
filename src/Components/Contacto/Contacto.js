import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import img9 from '../../assets/images/img-9.png'


const Contacto = () => {
   const form = useRef();
   const { prop } = useParams();
   const [razon, setRazon] = useState(prop ? prop : "");

   const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_ys3cnzr', 'template_iwplcl5', form.current, 'PJjuRWjdUrxwdXv8u')
         .then((result) => {
            console.log(result);
            if (result.status === 200) {
               Swal.fire({
                  title: `Su mensaje ha sido entregado.
                              En la brevedad nos estaremos contactando.
                              Gracias`,
                  showClass: {
                     popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                     popup: 'animate__animated animate__fadeOutUp'
                  }
               })
               form.current.reset();
               setRazon('');
            }

         }, (error) => {
            console.log(error.text);
            Swal.fire('Hubo un error, por favor intente más tarde. Gracias')
         });


   }




   return (
      //  <!-- contact section start -->
      <main className="contact_section layout_padding" id='contacto'>
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <h1 className="contact_text">CONTACTANOS</h1>
                  <div className="mail_sectin">
                     <form ref={form} onSubmit={sendEmail}   >
                        <input type="text" className="email-bt" placeholder="Nombre*" name="from_name" required />
                        <input type="email" className="email-bt" placeholder="Email*" name="user_email" required />
                        <input type="text" className="email-bt" placeholder="Razón del mensaje*" name="razon" value={razon} onChange={(e) => setRazon(e.target.value)} required />
                        <textarea className="massage-bt" placeholder="Mensaje*" rows="5" id="comment" name="message" required></textarea>
                        <div className="send_bt"><input className="btn btn-dark w-100 py-3" type="submit" value="Enviar mensaje" /></div>
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