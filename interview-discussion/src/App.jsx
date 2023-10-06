import { useState } from 'react'
import './App.css'

function App() {
  const [value,setValue] = useState(1)
  const [multiplyed,setMultiplyed] = useState(0)
 

  function Multiplaybyfive(){
  
    setMultiplyed(value*5)
    setValue(value+1)
  }

  return (
    <>
    <h1>Main value : {value} </h1>
    <button onClick={Multiplaybyfive}>Click to Multiply the value by 5</button>
    <p>Multiplyed value : {multiplyed} </p>

    </>
  )
}

export default App
