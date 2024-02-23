import React from 'react'
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption, MDBBtn } from 'mdb-react-ui-kit';
import './Home.css'
import  abtlogo  from '../../Assets/abtlogo.png'
import  dsign from '../../Assets/dsign.svg'
import About from '../About/About';
import Services from '../Services/Services';
import battery1 from '../../Assets/battery1.png'
import battery3 from '../../Assets/battery3.png'
import invet2 from '../../Assets/invet2.png'
import  '../quote/Quote.css'
import quote from '../../Assets/quote.jpg'

function Home() {
  return (
    <> 
  <div className='home'>
   <div className='carousel-view'>
        <MDBCarousel showControls showIndicators>
          <MDBCarouselItem itemId={1}>
            <img src='https://i0.wp.com/solarquarter.com/wp-content/uploads/2022/10/27-1.png?fit=1200%2C675&quality=80&ssl=1'
             className='d-block w-100'
             height='610px' alt='...' />
            <MDBCarouselCaption >
            <div className='slide-detail'>
              <h1>Solar And Renewable Energy</h1>
    <p>The sun contain more than enough energy to meet the entirew world's energy needs, and it won't un out anytime soon , like fossils fuels,. So decide to join us in utilizing the sun's supreme power.</p> 
    <button>Know More</button>
    </div>
           </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId={2}>
          
    <MDBCarouselCaption >
    <div className='slide-detail'>
              <h1>Tell your son to use the power of the sun.</h1>
              <p>Solar power will save you money and protect the environment too. Installing solar panels in your home will provide you with long-lasting electricty,and Calculate your savings now , and try using solar energy to save money</p>
              <button>Know More</button>
              </div>
            </MDBCarouselCaption>
           
            <img src='https://media.bizj.us/view/img/12367950/solarnative*900xx1280-720-0-40.jpg'
             className='d-block w-100' 
             height='610px'
             
             alt='...' />
    
          </MDBCarouselItem>
          <MDBCarouselItem itemId={3}>
            <img src='https://hips.hearstapps.com/hmg-prod/images/low-angle-view-of-solar-panels-against-sky-royalty-free-image-1587389153.jpg?crop=1xw:0.75035xh;center,top&resize=1200:*'
             className='d-block w-100'
             height='610px' alt='...' />
            <MDBCarouselCaption  >
            <div className='slide-detail'>
              <h1>Solar panels for home </h1>
              <p> Solar panels for homes are a renewable energy source that lowers electricty bills, has low maintenance costs and a variety of uses.</p>
              <button>Know More</button>

              </div>
            </MDBCarouselCaption>
            
            
          </MDBCarouselItem>
        </MDBCarousel>
   </div>
   <div className="abt">
    <div className="home-wrap">
        <div className="wrapbox">
<div className='image' >
                <img src={abtlogo} alt=".." />
    
</div >        </div>
        <div className="wrapbox">
<div className="detail">
    <h2>BrightNpower Stands By Every Project.</h2>
    <p>Our focus is to ensure that every house roof is working to generate electricity from the sun.</p>
<h4>T. Jarald - Director of Company</h4>
<img src={dsign} alt=".." />
</div>
        </div>
    </div>
   </div>
  </div>
 <About/>
 <Services/>
 <div className="products">
  <h5 className='h5'>Our Products</h5>
  <h1>Visit Our Lastest Products</h1>
 <div className="prodct-card">
            <div className="product-box">
                <img src={battery1}  width='270px' height='230px' alt="" />
              <p>We Are pioneers of solar & renewable energy industry</p>
              <button className="butn">Battery</button>
            </div>
            <div className="product-box">
              <img src={invet2} alt="" width='270px' height='230px'/>
              <p>We Are pioneers of solar & renewable energy industry</p>
              <button className="butn">Inverter</button>
            </div>
            <div className="product-box">
                <img src={battery3} alt=""  width='270px' height='230px'/>
                <p>We Are pioneers of solar & renewable energy industry</p>
                <button className="butn">Battery </button>
                </div>
                </div>
                <button>Explore More</button>
                <div className='quotepage'>
<div className='container'>
   <div className="quote-wrap">
            <div className="pic">
    <img src={quote} alt="" width='600px' height='450px' />       
            </div>
              <div className="form-page">
                <h5 className='h5'>Free quote</h5>
                <h1>Get A Free Quote</h1>
    <form className='form-box'>
    
    <div className='inpt-1'>
        <input type="text" placeholder='Your Name'    />
        <input type="email" placeholder='Your Email' />
     </div>
     <div className='inpt-1'>
        <input type="number" placeholder='Your Number'    />
        <input type="text" placeholder='Services' />
     </div>
    <div className='inpt-2'>
        <textarea name="" id="" cols="5" rows="6" placeholder='Special Note'></textarea>
    </div >
    <div className='button-btn'>
      <button>Send Message</button>
      
    </div></form>
              </div>
           
            
            </div>
</div >
    </div>
 </div>
 </>
  )
}

export default Home     