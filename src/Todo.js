   
import React, {useState} from "react";

export default function Todo({title, content, dateCreated, index, isComplete, dispatch}) {

    const [dateCompleted, toggleCompletionDate] = useState(null);

    function delTodo(){
        dispatch({type: "DELETE", index: index});
    }
    function toggleTodo() {
        toggleCompletionDate(Date(Date.now()))
        dispatch({type: "TOGGLE", index: index, completionStatus: isComplete})
    }


    return(
        <div>
            <input type="checkbox" checked={isComplete} onChange={toggleTodo} />
            <label><b><big>{title}</big></b></label>
            <p>{content}</p>
            <p>Date created: {dateCreated}</p>
            {dateCompleted && <label>dateCompleted: {dateCompleted}</label>}
            <br/>
            <button onClick={delTodo}>Delete</button>
            <br/><br/>
        </div>
    )
}