import React, { useState } from 'react'
import Button from '../Button/Button'
import './card.scss'

function Card({
                id, status, title, description, action, buttonActionEdit, buttonActionRemove,
              }) {
  const [edit, setEdit] = useState(false)
  const [unfold, setUnfold] = useState(false)
  const [tempTitle, setTempTitle] = useState(title)
  const [tempDescription, setTempDescription] = useState(description)

  const handleSave = () => {
    setEdit(false)
    buttonActionEdit({
      id: id,
      status: status,
      title: tempTitle,
      description: tempDescription,
    })
  }

  const active = status === 0 ? 'inactive' : 'active'
  const classes = `item container ${active}`
  return (
    <article className={classes}>
      <header className="item header">
        {edit ?
          <input
            className="edit-field"
            value={tempTitle}
            onChange={event => setTempTitle(event.target.value)}
            type="text"
            id="form-item-title"
            placeholder="Title"
          /> :
          title
        }
        <div>
          <span className="done">Done: </span>
          <input
            type="checkbox"
            id="scales"
            checked={status === 0}
            onClick={() => action(id)} id={id}
          />
        </div>
      </header>
      <div className="item content">
      {edit ?
        <input
          className="edit-field edit-description"
          value={tempDescription}
          onChange={event => setTempDescription(event.target.value)}
          type="text"
          id="form-item-description"
          placeholder="Description"
        /> :
        description
      }
      </div>
      <div className="item footer">
        {unfold && edit ? <Button type={'save'} text={'Save'} action={() => handleSave()} /> : null}
        {unfold && !edit ? <Button type={'edit'} text={'Edit'} action={() => setEdit(true)} /> : null}
        {unfold ? <Button type={'remove'} text={'Remove'} action={() => buttonActionRemove(id)} /> : null}
        <Button type={'edit'} text={unfold ? 'Less' : 'More'} action={() => setUnfold(!unfold)} />
      </div>
    </article>
  );
}

export default Card
