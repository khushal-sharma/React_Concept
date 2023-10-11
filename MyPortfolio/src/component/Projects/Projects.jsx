import React from 'react'
import './Projects.css'
import { Link } from 'react-router-dom'
function Projects() {
  return (
    <div className='projectContainer'>
        <div id='project1' className="project">
            <img src="" alt="" />
            <Link><h1>Title</h1></Link>
            <p>Description</p>
        </div>
        <div id='project2' className="project">
            <img src="" alt="" />
            <Link><h1>Title</h1></Link>
            <p>Description</p>
        </div>
        <div id='project3' className="project">
            <img src="" alt="" />
            <Link><h1>Title</h1></Link>
            <p>Description</p>
        </div>
        <div id='project4' className="project">
            <img src="" alt="" />
            <Link><h1>Title</h1></Link>
            <p>Description</p>
        </div>
        <div id='project5' className="project">
            <img src="" alt="" />
            <Link><h1>Title</h1></Link>
            <p>Description</p>
        </div>
      
    </div>
  )
}

export default Projects
