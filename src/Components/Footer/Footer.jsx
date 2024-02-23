import React from 'react'
import './Footer.css'
import product2 from '../../Assets/product2.jpg'
import product3 from '../../Assets/product3.jpg'
import product4 from '../../Assets/product4.jpg'
import feature from '../../Assets/feature.jpg'
import product5 from '../../Assets/product5.jpg'
import service5 from '../../Assets/service5.jpg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-page">
          <div className="footer-item">
            <h6>Address</h6>
           <ul className='foot-add'>
            <li> <i class="fa-solid fa-location-dot"></i> 46/ Newcolony 4th cross</li>
            <li>street/New colony 2nd main road,</li>
            <li> New colony, Alwarthirunagar ,</li>
            <li> Chennai, India, 600087</li>
            <li> <i class="fa-solid fa-phone"></i>  +91 94441 11093</li>
            <li>  <div className="icon">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div></li>
            <li><i class="fa-solid fa-envelope"></i> brightpowersol7@gmail.com</li>
           </ul>
    
          </div>
          <div className="footer-item">
          <h6>Quick Links</h6>
         <ul className='foot-nav'>
<Link to='/about'> <li>About Us</li></Link>         
<Link to='/services'> <li>Our Services</li></Link>
<Link to='/contact'> <li>Contact Us </li></Link>
<Link to='/'><li>Term & Condition</li></Link>
<Link to='/qoute'><li>Support</li></Link>
         </ul>
          </div>
          <div className="footer-item">
          <h6>Project Gallery</h6>
           <div className="gallery">
            <div className="gal">
<img src={product2} alt="" width='70px' height='40px' /><img src={product3} alt="" width='70px' height='40px' /><img src={product4} width='70px' height='40px' alt="" />
            </div>
            <div className="gal">
            <img src={feature} alt="" width='70px' height='40px' /><img src={product5} alt="" width='70px' height='40px' /><img src={product4} width='70px' height='40px' alt="" />

            </div>
           </div>
          </div>
          <div className="footer-item">
            <div className='inputbox'>
              <input type="text" placeholder='Your Email'/>
              <button>Sign up</button>
            </div>
          </div>
        </div>
        <div className="last-foot">
       <p>© BrightNpower @ 2024 All Right Reserved.</p>
        </div>
      </div>

    </footer>
  )
}

export default Footer