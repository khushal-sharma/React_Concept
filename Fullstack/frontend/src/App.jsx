import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'


function App() {
  const [jokes, setJokes] = useState([])


  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })

  return (
   <>
   <h1>Fullstack</h1>
   <h2>JOKES : {jokes.length}</h2>
   {
    jokes.map((joke,index)=>(
         <div key={joke.id}>
          <h3>{joke.question}</h3>
          <p>{joke.answer}</p>

         </div>
    ))
   }
   </>
  )
}

export default App
