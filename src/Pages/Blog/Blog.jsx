import React from 'react'
import error from '../../Assets/error.jpg'
import './Blog.css'
import { Link } from 'react-router-dom'

function Blog() {
  return (
    <div className='blog-page'>
      <div className="container">
      <div className="heading">
          
          <h1>NOT FOUND  <i class="fa-solid fa-triangle-exclamation"></i></h1>
          <p>Home / Pages / Not Found</p>
        </div>

        <div className="blog-image">
            <img src={error} alt="..."
            height='400px' />
<Link to='/'>
              <button>Back To Home</button>
  
</Link>        </div>
        </div>  
    </div>
  )
}

export default Blog