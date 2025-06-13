import React from 'react'
import '../styles/connections.css'
import mobile2 from '../assets/mobile-screen2.PNG'
const Connections = () => {
  return (
    <>
    <div className="connection-container">
        <div className="connection-img">
            <img src={mobile2} alt="" />
        </div>
        <div className="connection-content">
          <h1>Where Every Click <br /> Sparks a Connection</h1>
          <span>A small act of kindness today can create a lifetime of impact Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatem numquam ex.</span>
           <div className="connection-box">
          <h2>Short Videos & Reels</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, earum.</p>
        </div>
        <div className="connection-box">
          <h2>Short Videos & Reels</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, earum.</p>
        </div>
        <div className="connection-box">
          <h2>Short Videos & Reels</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, earum.</p>
        </div>
        </div>
       
    </div>
    </>
  )
}

export default Connections