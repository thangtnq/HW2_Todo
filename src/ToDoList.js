
import React, {useContext} from "react";
import {StateContext} from './context'
import Todo from "./Todo"

export default function TodoList() {

    const {state} = useContext(StateContext)
    const {todos} = state
    const incomplete = todos.filter((t) => t.isComplete === false)
    const complete = todos.filter((t) => t.isComplete === true)
    
    return(
        <div>
             <h2>Todo</h2>
            {incomplete.map((t, i) => <Todo {...t} key={'todo-' + i} />)}
            <h2>Completed</h2>
            {complete.map((t, i) => <Todo {...t} key={'complete-' + i} />)}
              
        </div>
    )
}