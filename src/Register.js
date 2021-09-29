import React, { useState } from 'react';

export default function Register() {
    const [ username, setUsername ] = useState('')
    function handleUsername (e) { setUsername(e.target.value) }
    return (
        <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="register-username">Username: </label>
            <input type="text" value={username} onChange={handleUsername} name="register-username" id="register-username" />
            <label htmlFor="register-password">Password: </label>
            <input type="password" name="register-password" id="register-password" />
            <label htmlFor="register-password-repeat">Repeat password: </label>
            <input type="password" name="register-password-repeat" id="register-password-repeat" />
            <input type="submit" value="Register" disabled={username.length === 0}/>
        </form>
    )
}