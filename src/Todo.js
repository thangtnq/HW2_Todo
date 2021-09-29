   
import React from "react";

export default function Todo({title, content}) {
    let isCompleted = false
    const dateCreated = Date(Date.now())
    let completeDate = null
    function completeTodo() {
     isCompleted = true
    }
    return(
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>Date created: {dateCreated}</p>
            <input type="checkbox" checked= {isCompleted} onChange={completeTodo}/>
            <label>completeDate: {completeDate}</label>
        </div>
    )
}