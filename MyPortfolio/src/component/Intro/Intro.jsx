import React from 'react'
import bg from '../../Assets/photo.png'
import './Intro.css'

function Intro() {
  return (
    <section className='intro'>
        <div className='intoContent'>
            <span className='hello'>Hello,</span>
            <span className='intoText'>I'm <span className='intorName' >Khushal</span><br/>Website Designer</span>
            <p className='introPara'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/> Veritatis tempora id asperiores ea esse consequuntur consectetur reiciendis. Praesentium, recusandae accusamus?</p>

            <a href="">
              <button className='btn'>
                <i id='bag' className="fa-solid fa-bag-shopping">
                  </i>
                  Hire Me
              </button>
            </a>
            
      </div>
      <img className='bg' src={bg} alt="" />

    </section>
    
  )
}

export default Intro
