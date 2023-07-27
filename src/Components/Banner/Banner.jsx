import React from 'react'
import './Banner.css'
const Banner = () => {
  return (
    <div className='Banner'>
      <div className="Banner_left">
        <h4>Elias is a <span style={{color:"#C778DD"}}>web designer</span> and <span style={{color:"#C778DD"}}>front-end developer</span></h4>
        <p>He crafts responsive websites where technologies meet creativity</p>
        <button>Contact me !</button>
      </div>
      <div className="Banner_right">
        <img src={require('../../Assets/banner.png')} alt="" />
        <div>
          <div className="dot"></div>
          <p>Currently working on Portfolio</p>
        </div>
      </div>
     
    </div>
  )
}

export default Banner