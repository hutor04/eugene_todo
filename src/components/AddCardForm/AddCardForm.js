import React, { useState } from 'react'
import './addcardform.scss'

function AddCardForm({ action }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    action({ title, description })
    setTitle('')
    setDescription('')
  }

  return (
    <form className="add-item-form" onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={event => setTitle(event.target.value)}
        type="text"
        id='form-item-title'
        placeholder="Title"
      />
      <input
        value={description}
        onChange={event => setDescription(event.target.value)}
        type="text"
        id="form-item-description"
        placeholder="Description"
      />
      <button type="submit" id="form-new-item-button" value="Add" className="button add-item">Add</button>
    </form>
  )
}

export default AddCardForm
