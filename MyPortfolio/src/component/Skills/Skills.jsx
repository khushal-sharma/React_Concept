import React from 'react'
import './Skills.css'
function Skills() {
    return (
        <section id='skills'>
            <h1 className='skillsheading'>What I do</h1>
            <p className='skillsDesc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, commodi. Reiciendis inventore ducimus adipisci iste earum facilis rem, odit omnis!</p>
            <div id="skillBars">
                <div id='skill1' className="skill">
                    <img src="" alt="" />
                    <div className="skillBarText">
                        <h1>UI/UX design</h1>
                        <p>This is a demo test you can write your own contact here. </p>
                    </div>

                </div>
                <div id='skill2' className="skill">
                    <img src="" alt="" />
                    <div className="skillBarText">
                        <h1>Website design</h1>
                        <p>This is a demo test you can write your own contact here. </p>
                    </div>

                </div>
                <div id='skill3' className="skill">
                    <img src="" alt="" />
                    <div className="skillBarText">
                        <h1>Animation design</h1>
                        <p>This is a demo test you can write your own contact here. </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Skills
