import React, {useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const clickHandler=(e)=>{
       e.preventDefault()
       setUser({username,password})
    }
    
    return (
        <div>
            <h2>LOgin</h2>
            <input 
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            type='text'
            placeholder='username'
            />
            <input
             value={password}
             onChange={(e)=>setPassword(e.target.value)}
            type='password'
            placeholder='userpassword'
            />
            <button onClick={clickHandler}>Submit</button>
        </div>
    )
}

export default Login;