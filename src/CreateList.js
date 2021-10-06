import React, {useState} from "react"


export default function CreateList({index, dispatch}) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  function handleTitle (e) { setTitle(e.target.value) };
  function handleContent (e) {setContent(e.target.value)};
  function clearForm() {setTitle(''); setContent('')};

  const dateCreated = Date(Date.now());
  let isComplete = false;
  return (
      <form onSubmit={e => {e.preventDefault()
            clearForm()
            dispatch({type: "CREATE", title, content, dateCreated, index, isComplete})}}>
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