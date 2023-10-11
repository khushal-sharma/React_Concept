import React from 'react'
import './Courses.css'
import {TweenMax, Power3} from 'gsap'
function Courses() {
  return (
    <div className='coursesContainer'>
      <div className="course">HTML</div>
      <div className="course">CSS</div>
      <div className="course">JAVASCRIPT</div>
      <div className="course">NODEJS</div>
      <div className="course">REACTJS</div>
      <div className="course">MONGODB</div>
      <div className="course">EXPRESS</div>
      <div className="course">GSAP</div>
      <div className="course">GITHUB</div>

    </div>
   
  )
  {gsap.from(".course",{
    x:-100
  })}
}

export default Courses
