   
import React, {useEffect, useContext} from "react";
import {StateContext} from "./context";
import {useResource} from "react-request-hook";

export default function Todo({title, content, dateCreated, isComplete, dateCompleted, id}) {

    console.log(id)
    console.log(isComplete)

    const{dispatch} = useContext(StateContext)
    const [ todoToDel, deleteTodo ] = useResource(() => ({
        url: `/todos/${id}`,
        method: 'delete'
    }))
    const [ todoToToggle, toggleTodo ] = useResource(() => ({
        url: `/todos/${id}`,
        method: 'patch',
        data: { "isComplete": !isComplete, "dateCompleted": Date.now() }
    }))

    function handleToggle(){
        toggleTodo()
    }

    function handleDelete() {
        deleteTodo();
    }

    useEffect(() => {
        if (todoToDel && todoToDel.data) {
            dispatch({type: "DELETE", todoId: id})
        }
    }, [todoToDel])
    useEffect(() => {
        if (todoToToggle && todoToToggle.data) {
            dispatch({type: "TOGGLE", isComplete: todoToToggle.data.isComplete, todoId: id, dateCompleted: todoToToggle.data.dateCompleted})
        }
    }, [todoToToggle])



    return(
        <div>
            <input type="checkbox" checked={isComplete} onClick={handleToggle} />
            <label><b><big>{title}</big></b></label>
            <p>{content}</p>
            <p>Date created: {new Date(dateCreated).toLocaleDateString('en-us')}</p>
            {dateCompleted && <label>Date Completed: {new Date(dateCreated).toLocaleDateString('en-us')}</label>}
            {dateCompleted && <br/>}
            
            <button onClick={handleDelete}>Delete</button>
            <br/><br/>
        </div>
    )
}