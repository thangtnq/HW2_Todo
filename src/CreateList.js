import React, {useState, useContext, useEffect} from "react"
import {StateContext} from ".context"
import {useResource} from 'react-request-hook'


export default function CreateList() {

  const {dispatch} = useContext(StateContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');


  function handleTitle (e) { setTitle(e.target.value) };
  function handleContent (e) {setContent(e.target.value)};
  function clearForm() {setTitle(''); setContent('')};

  const dateCreated = Date(Date.now());
  const isComplete = false;
  const dateCompleted = null;

  const [ todo, createTodo] = useResource(({title, content, dateCreated, isComplete, dateCompleted}) => ({ 
    url: '/todo',
    method: 'post',
    data: {title, content, dateCreated, isComplete, dateCompleted}
  }))


  function handleCreate() {
    createTodo({title, content, dateCreated, isComplete, dateCompleted})
    clearForm()
  }

  useEffect(() => {
    if (todo && todo.isLoading === false && todo.data) {
        dispatch({
            type: "CREATE",
            title: todo.data.title,
            content: todo.data.content,
            dateCreated: todo.data.dateCreated,
            todoId: todo.data.id
        })
    }
}, [todo])

  return (
      <form onSubmit={e => {e.preventDefault()
            handleCreate()}}>
          <h3>Add new item</h3>
          <div>
              <label htmlFor="create-title">Title: </label>
              <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
          </div>
          <br/>
          <textarea value={content} onChange={handleContent}/>
          <br/>
          <input type="submit" value="Submit" disabled={title.length === 0}/>
      </form>
  )
}