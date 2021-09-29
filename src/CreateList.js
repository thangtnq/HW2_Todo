import React, {useState} from "react"


export default function CreateList({user}) {
  const [title, setTitle] = useState('')
  function handleTitle (e) { setTitle(e.target.value) }
  return (
      <form onSubmit={e => e.preventDefault()}>
          <h3>Add new item</h3>
          <div>
              <label htmlFor="create-title">Title: </label>
              <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
          </div>
          <br/>
          <textarea/>
          <br/>
          <input type="submit" value="Submit" disabled={title.length === 0}/>
      </form>
  )
}