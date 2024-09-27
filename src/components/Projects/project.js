import React from 'react'
import './projects.css'
import RookForWeb from '../../components/RookForWeb.png';
import WedDespng from '../../components/WedDespng.png';
import RealWeb from '../../components/RealWeb.jpg';


const Project = () => {
  return (
   <section id='projects'>
     <span className="projectTitle"> My Project:</span>
     <span className="projectDesc"> I created a chess game that works. I have designed characters for a game i was developing and i also created a realstate website.</span>
     <div className="projectPhoto1">
     <div className="projectPhoto2">
        <img src={RookForWeb} alt="" className="projectImg" />
        <img src={WedDespng} alt="" className="prject2Img" />
        <img src={RealWeb} alt="" className="projectPhoto3Img" />
     </div>

     </div>
   </section>
  )
}

export default Project