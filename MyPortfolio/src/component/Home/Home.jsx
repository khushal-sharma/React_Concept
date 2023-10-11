import React from 'react'
import Navbar from '../Navbar/Navbar'
import Intro from '../Intro/Intro'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Contact from '../ContactForm/Contact'

function Home() {
    return (
        <div>
            <Intro />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default Home
