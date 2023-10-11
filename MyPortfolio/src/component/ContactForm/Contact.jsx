import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div className='formContainer'>
        <h1>Contact Me</h1>
         <form id='form' action="">
        <label htmlFor="name">First name:</label>
        <br/>
        <input type="text"id='name' placeholder='Enter your name' />
        <br/>
        <label htmlFor="email">Email:</label>
        <br/>
        <input type="text" id='email' placeholder='Enter your email'/>
        <br/>
        <label htmlFor="description">Description:</label>
        <br/>
        <textarea  name="" id="desc" cols="55" rows="10"></textarea>
        <br/>
        <button className='submitForm'>Submit</button>


    </form>

    </div>

   
  )
}

export default Contact
