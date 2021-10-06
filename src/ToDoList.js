
import React from "react";
import Todo from "./Todo"

export default function TodoList({todos = [], dispatchTodo}) {
    let completedTodos = todos.filter((t) => t.isComplete === false)
    
    return(
        <div>
            <h2>Todo</h2>
            {completedTodos.map((t, i) => <Todo {...t} key={'todo-' + i} dispatch={dispatchTodo} />)}               
        </div>
    )
}