import React from 'react'
import { Link } from 'react-scroll';
import './Home.css'
function Home() {
  return (
    
      <div className='topcontent'>
      <div className='topcontent-leftcon'>
        <img alt=".." src="/image/hbqqr3g9-removebg-preview (1).png" width="500" height="650" />
      </div>
      <div className="topcontent-rightcon">
        <h3>Hi, I am Mahalakshmi</h3>
        <h4>Full Stack Develo<span className="text">per</span></h4>
        <p>As an enthusiastic Front-end and Back-end Developer with a strong foundation in REACT, CSS, JAVASCRIPT, and MongoDB, I am passionate about creating intuitive user interfaces and eager to contribute my skills to a collaborative team.</p>
        <a href="https://drive.google.com/file/d/1JffxnAq9K4JkF_rD7uY_9FJnSyxflJ61/view?usp=drive_link" target='_blank'>
          <button type="button" className="btn-dwld">Download CV</button>
        </a>
        <Link to="project" smooth={true} duration={500}>
          <button type="button" className="btn-mywork">My Work</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
