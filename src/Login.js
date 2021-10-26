import React, { useContext, useState, useEffect } from "react";
import { StateContext } from "../context";
import { useResource } from 'react-request-hook'

export default function Login() {

    const {dispatch} = useContext(StateContext);
    const [ username, setUsername ] = useState('')
    const [password , setPassword] = useState('')
    const [loginFailed, setLoginFailed] = useState(false)

    function handleUsername (e) { setUsername(e.target.value) }
    function handlePassword (e) { setPassword(e.target.value)}
    const [ user, loginUser ] = useResource((username, password) => ({
        url: `/login/${encodeURI(username)}/${encodeURI(password)}`,
        method: 'get'
    }))

    useEffect(() => {
        if (user && user.data) {
            if (user.data.length > 0) {
                dispatch({type:"LOGIN", username})
                setLoginFailed(false)
            } else {
                setLoginFailed(true)
            }
        }
    }, [user])

    return (
        <form onSubmit={evt => {
            evt.preventDefault()
            loginUser(username, password)
        }} >
        <label htmlFor="login-username">Username: </label>
        <input type="text" value={username} onChange={handleUsername} id="login-username" />
        <label htmlFor="login-password">Password: </label>
        <input type="password" value={password} onChange={handlePassword} id="login-password" />
        <input type="submit" value="Login" />
        {loginFailed && <label>Invalid username or password</label>}
    </form>
    )
}