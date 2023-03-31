import './footerStyles.css'
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa"
import React from 'react'

const Footer = () => {
  return (
    <div className="Footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    <div>
                        <p>404,Neelkanth orchid</p>
                        <p>Sterling City</p>
                        <p>Bopal,Ahmedabad</p>
                        <p>380058</p>
                        
                    </div>
                    </div>
                
                   
                    <div className="phone">
                        <h4>     <FaPhone size={20} style={{color:"#fff",marginRight:"1.2rem"}}/>
                          957566647884</h4>
                       
                    </div>
                    <div className="email">
                        <h4> <FaMailBulk size={20} style={{color:"#fff",marginRight:"1.2rem",marginTop:"10px"}}/>
                     info@gmail.com</h4>
                   
                    </div>
                    </div>
                    <div className="right">
                        <h4>
                            About Me
                        </h4>
                        <p style={{color:"#fff",marginRight:"1.2rem",marginTop:"10px"}}>
                            
                            This is my portfolio Nirali Pandya.
                            I enjoy building
                             and developing different 
                             Websites and  Mobile Apps.
                        </p>

                   
                
               <div className="social">
                <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}/>
                <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}}/>
                <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/>
                    
                </div>
            </div>
            
   </div>
        </div>
      
    
  )
}

export default Footer
