import React, { useState } from 'react'
import Button from '../Button/Button'
import './card.scss'

function Card({
                id, status, title, description, action, buttonActionEdit, buttonActionRemove,
              }) {
  const [edit, setEdit] = useState(false)

  const active = status === 0 ? 'inactive' : 'active'
  const classes = `item container ${active}`
  return (
    <article className={classes}>
      <header className="item header" onClick={() => action(id)} id={id}>{title} - Click Me to Toggle Status</header>
      <div className="item content">{description}</div>
      <div className="item footer">
        {status === 0 && edit ? <Button type={'save'} text={'Save'} action={() => setEdit(false)} /> : null}
        {status === 0 && !edit ? <Button type={'edit'} text={'Edit'} action={() => setEdit(true)} /> : null}
        {status === 0 ? <Button type={'remove'} text={'Remove'} action={() => buttonActionRemove(id)} /> : null}
      </div>
    </article>
  );
}

export default Card
