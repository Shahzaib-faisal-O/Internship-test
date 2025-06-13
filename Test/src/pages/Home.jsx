import React from 'react'
import '../styles/home.css'
import mobile from '../assets/mobile-screen.png'
const Home = () => {
  return (
    <>
    <div className="home-container">
        <div className="home">
 <section className='home-content'>
         <h1>Stay Connected Stay Social Stay you </h1>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate nihil consequuntur ut libero facere iure? Dicta facilis aperiam tempore voluptate quod, architecto excepturi!</p>
            <button className='home-btn'>Get Started</button>
        </section>
     <section className='home-img'>
<img src= {mobile} alt="" />
     </section>
        </div>
       
    
    </div>    
    </>
  )
}

export default Home