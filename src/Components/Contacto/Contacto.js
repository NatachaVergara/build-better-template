import React from 'react'
import img9 from '../../assets/images/img-9.png'


const Contacto = () => {
  return (
        //  <!-- contact section start -->
        <div className="contact_section layout_padding">
        <div className="container">
           <div className="row">
              <div className="col-md-6">
                 <h1 className="contact_text">CONTACT US</h1>
                 <div className="mail_sectin">
                    <input type="text" className="email-bt" placeholder="Name" name="Name"/>
                    <input type="text" className="email-bt" placeholder="Email" name="Name"/>
                    <input type="text" className="email-bt" placeholder="Phone Number" name="Name"/>
                    <textarea className="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                    <div className="send_bt"><a href="#">SEND</a></div>
                 </div>
              </div>
              <div className="col-md-6 d-none d-md-flex ">
                 <div className="image_9"><img src={img9}/></div>
              </div>
           </div>
        </div>
     </div>     
  )
}

export default Contacto