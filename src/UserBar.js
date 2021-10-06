
import Login from './Login'
import Logout from './Logout'
import Register from './Register'

export default function UserBar({user, dispatch}) {
    
    if (user) {
        return <Logout user={user} dispatchUser={dispatch}/>
    } else {
        return (
            <div>
                <h3>Login</h3>
                <Login dispatchUser={dispatch}/>
                <h3>Register</h3>
                <Register dispatchUser={dispatch}/>               
            </div>
        )
    }
}