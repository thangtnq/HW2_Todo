   
import React, { useState } from "react";

export default function Login() {
    const [ username, setUsername ] = useState('')
    function handleUsername (e) { setUsername(e.target.value) }
    return (
        <form onSubmit={evt => evt.preventDefault()}>
            <label htmlFor="login-username">Username: </label>
            <input type="text" value={username} onChange={handleUsername} name="login-username" id="login-username" />
            <label htmlFor="login-password">Password: </label>
            <input type="password" name="login-pasword" id="login-password" />
            <input type="submit" value="Login" disabled={username.length === 0}/>
        </form>
    )
}