import React from 'react';
import './intro.css';
import PeterPhoto from '../../components/PeterPhoto.jpg';


const Intro = () => {
  return (
  <section id="intro">
    <div className="introContent">
     <span className="hello">Hello,</span>
     <span className="IntroText">Im <span className="IntroName">Peter</span> <br />Junior Developer</span>
     <p className="IntroPara">As a passionate Junior Software Developer, my mission is to leverage my growing technical skills and creativity to build innovative, efficient, and user-centric software solutions. I am committed to continuous learning, embracing challenges, and contributing to dynamic teams where I can enhance my coding proficiency and problem-solving abilities. My goal is to create impactful software that not only meets the needs of users but also drives business success and fosters a collaborative, forward-thinking environment</p>
    </div>
   <img src={PeterPhoto} alt="Profile" className="PeterPhoto" />
  </section>
  )
}

export default Intro;