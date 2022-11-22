import React from 'react'
import { Link } from 'react-router-dom'



const Copyright = () => {
    return (
      
        <div className="copyright_section">
            <div className="container">
                <div className="social_icon">
                    <ul>
                        <li><Link to='/'><box-icon type='logo' size='md' name='facebook-circle'></box-icon></Link></li>
                        <li><Link to='/'><box-icon type='logo' size='md' name='twitter'></box-icon></Link></li>
                        <li><Link to='/'><box-icon type='logo' size='md' name='instagram-alt'></box-icon></Link></li>
                        <li><Link to='/'><box-icon type='logo' size='md' name='linkedin-square'></box-icon></Link></li>
                    </ul>
                </div>
                <p className="copyright_text">2020 All Rights Reserved</p>
            </div>
        </div>    
  )
}

export default Copyright