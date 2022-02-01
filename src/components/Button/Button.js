import React from 'react'
import './button.scss'

function Button({ type, text, action }) {
  const classes = `button ${type}`
  return (
    <button className={classes} onClick={action}>{text}</button>
  )
}

export default Button
