import React from 'react'
import './About.css'
import p1 from '../../Assets/p1.jpeg'
import p2 from '../../Assets/p2.jpg'
import p3 from '../../Assets/p3.jpg'

function About() {
  return (
    <div className='about'>
      <div className="container">
<div className='heading'>
  <h1>ABOUT</h1>
  <p>Home / Pages / About</p>
</div>
      
      <div className="box-wrap">
<div className="boxs">
<div className='ic-box'>
    <button className='btn-icon'><i class="fa-solid fa-users"></i></button>
    <h2>3453</h2>
</div>  
<h5>Happy Customers</h5>
  <p>We have 4753 customers that are completely satisfied with our solar panels.</p>
</div>
<div className="boxs">
<div className='ic-box'>
  <button className='btn-icon'><i class="fa-solid fa-check"></i></button>
  <h2>4234</h2>
  
</div>  <h5>Project Done</h5>
  <p>Based on our prior work, we completed 4534 projects without recieving any complaints or delays.</p>
</div>
<div className="boxs">
<div className='ic-box'>
  <button className='btn-icon'><i class="fa-solid fa-award"></i></button>
  <h2>3123</h2>
</div>  <h5>Awards Win 15</h5>
  <p>With the Best Solar Manufacturing Award, we have been honored.</p>
</div>
<div className="boxs">
<button className='btn-icon'><i class="fa-solid fa-users-gear"></i></button>
<div className='ic-box'>
  <h2>1831</h2>
  <h5>Expert Workers</h5>
  
</div>  <p>All services and installations are carried out by trained and skilled persons.</p>
</div>
      </div>
      <div className="content">
     <div className="abt-photo">
      <img src="https://etimg.etb2bimg.com/thumb/msid-98933761,width-1200,height-900,resizemode-4/.jpg"
       alt="..." 
       height='450px'
       width='550px'/>
     </div>
     <div className="abt-content">
      <h4>Over 36 Years of Experience in the Solar & Renewable Energy Sector</h4>
    <p>Since every customer's needs are unique and we are skilled at understanding them, we take a special approach to wealth creation and offer personalized solutions. Our in-depth study of the legal and business considerations of the solar and power sectors will guarantee that the customers benefits from the collaborative effort.</p>
     <button>Know More</button>
     </div>
      </div>
      <div className="team">
<h2>Experienced Team Members</h2>
<div className='card-wrap'>
  <div className="card">
    <img src={p1} alt=""  height='350px' width='270px'/>
    <h5>Name</h5>
    <p>Designation</p>
  </div>

  <div className="card">
  <img src={p2} alt="" height='350px' width='270px'/>
    <h5>Name</h5>
    <p>Designation</p>
  </div>
  <div className="card">
  <img src={p3} alt=""  width='270px' height='350px' />
    <h5>Name</h5>
    <p>Designation</p>
  </div>
  
</div>      </div>
      </div>
    </div>
  )
}

export default About