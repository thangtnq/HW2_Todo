
import React from "react";
import Todo from "./Todo"

export default function TodoList({todos = []}) {
    todos[0] = {
        title: "Item 1",
        content: "Walk dog"
    }
    todos[1] = {
        title: "Item 2",
        content: "Do dishes"
    }
    todos[2] = {
        title: "Item 3",
        content: "Wash car"
    }
    // ------------
    return(
        <div>
            {todos.map((t, i) => <Todo {...t} key={'todo-' + i} />)}
        </div>
    )
}