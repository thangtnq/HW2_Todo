import UserBar from "./UserBar"
import ToDoList from "./ToDoList"
import CreateList from "./CreateList"
import appReducer from "./reducer"
import React, {useReducer} from 'react'

function App() {
  const [ state, dispatch ] = useReducer(appReducer, {
    user: '',
    todos: []
  })
  const { user, todos } = state
  return (
    <div>
      <UserBar user={user} dispatch={dispatch} />
      {user && 
        <div>
        <CreateList index={todos.length} dispatch={dispatch} />
        <ToDoList todos={todos} dispatchTodo={dispatch}/>
        </div> 
      }
    </div>
  )
}

export default App;
