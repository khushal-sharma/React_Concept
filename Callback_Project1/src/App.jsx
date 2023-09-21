
import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberallowed, setNumberAllowed] = useState(false)
  const [characterallowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")


  const passwordRef = useRef(null);


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberallowed) str += "0123456789"
    if (characterallowed) str += "!@#45^&*()[]{}:;"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [numberallowed, length, characterallowed, setPassword])

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select()// this line is to highlight the text generate in input
    window.navigator.clipboard.writeText(password)// to get password which is written in input field
  }, [password])


  useEffect(() => {
    passwordGenerator() // useefffect is use to call function everytime when change in anything like charactera legnth number etc
  }, [length, characterallowed, numberallowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipBoard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className='curser-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberallowed}
              id="numberInput"
              onChange={(e) => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={characterallowed}
              id="charInput"
              onChange={(e) => {
                setCharacterAllowed((prev) => !prev)
              }}
            />
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>

      </div>

    </>
  )
}

export default App
