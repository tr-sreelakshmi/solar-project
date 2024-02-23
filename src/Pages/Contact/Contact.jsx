import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact-page'>
<div className='container'>
  <div className='heading'>
    <h1>CONTACT</h1>
    <p>Home / Pages / Contact</p>
  </div>
          <div className="contact-wrap">
            <div className="form-page">
  <h5>Contact Us</h5>
  <h2>Feel Free To Contact Us</h2>
  
  <form className='form-box'>
   <div className='input-1'>
      <input type="text" placeholder='Your Name'    />
      <input type="email" placeholder='Your Email' />
   </div>
  <div className='input-2'>
      <input type="text" placeholder='Subject' />
      <textarea name="" id="" cols="10" rows="6" placeholder='Message'></textarea>
    
  </div >
  <div className='button-btn'>
    <button>Send Message</button>
    
  </div></form>
            </div>
         
          <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7773.661919896291!2d80.1789071906766!3d13.04642954910324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52612e0e105011%3A0x51a61ee8019bef82!2sAlwartirunagar%2C%20Valasaravakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1708674060429!5m2!1sen!2sin"
           width="700" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          ewf
          </div>
          </div>
</div>
    </div>
  )
}

export default Contact