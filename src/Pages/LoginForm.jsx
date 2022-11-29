import React, { useState } from 'react'

const LoginForm = () => {
    const [user, setUser] = useState({
        email: '',
        pass: ''
    })
    const handleSubmit = (e) => {
        if(user.pass.length > 3){
            localStorage.setItem('token', 'a6sd7asd7547ashnjub')
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="email" onChange={(e) => setUser({...user, email: e.target.value})}/>
            <input type="password" onChange={(e) => setUser({...user, pass: e.target.value})}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default LoginForm