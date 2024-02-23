import React from 'react'
import quote from '../../Assets/quote.jpg'
import './Quote.css'

function Quote() {
  return (
    <div className='quote-page'>
<div className='container'>
    <div className='heading'>
      <h1>GET A QUOTE</h1>
      <p>Home / Pages / Get a Quote     </p>
    </div>
            <div className="quote-wrap">
            <div className="pic">
    <img src={quote} alt="" width='600px' height='450px' />       
            </div>
              <div className="form-page">
                <h5 className='h5'>Free Quote</h5>
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
  )
}

export default Quote