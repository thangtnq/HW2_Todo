
import React, { useState } from 'react'
import Login from './Login'
import Logout from './Logout'
import Register from './Register'

export default function UserBar() {
    const [ user, setUsername ] = useState('')
    function setUser (e) { setUsername(e.target.value) }
    if (user) {
        return <Logout user={user} setUser={setUser}/>
    } else {
        return (
            <div>
                <h3>Login</h3>
                <Login setUser={setUser}/>
                <h3>Register</h3>
                <Register setUser={setUser}/>
                <h3>Logout</h3>
                <Logout user={user} setUser={setUser}/>
            </div>
        )
    }
}