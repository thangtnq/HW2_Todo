import UserBar from "./UserBar"
import ToDoList from "./ToDoList"
import CreateList from "./CreateList"
import appReducer from "./reducer"
import React, {useReducer, useEffect} from 'react'
import { useResource } from 'react-request-hook'
import { StateContext } from './context';

function App() {

  const [ todos, getTodos ] = useResource(() => ({
    url: '/todos',
    method: 'get'
  }))

  const [ state, dispatch ] = useReducer(appReducer, {
    user: '',
    todos: []
  })

  useEffect(getTodos, [])

  useEffect(() => {
    if (todos && todos.data) {
      dispatch({ type: 'FETCH_TODOS', todos: todos.data.reverse() })
    }
  }, [todos]) 
 
  const { user } = state

  return (
    <div>
      <StateContext.Provider value={{state: state, dispatch: dispatch}}>
        <UserBar />
        {user && 
          <div>
          <CreateTodo />
          <TodoList />
          </div> 
        }
      </StateContext.Provider>
    </div>
  )
}

export default App;
