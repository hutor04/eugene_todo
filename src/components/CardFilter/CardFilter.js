import React from 'react'
import './cardfilter.scss'

function CardFilter({ state, action }) {

  const handleChange = e => {
    const target = e.target
    if (target.checked) {
      action(parseInt(target.value))
    }
  }

  return (
      <div className="card-filter">
        <span>Show: </span>
        <label>
          <input type="radio" value="2" checked={state == 2} onChange={handleChange} />
          <span>All</span>
        </label>
        <label>
          <input type="radio" value="0" checked={state == 0} onChange={handleChange} />
          <span>Done</span>
        </label>
        <label>
          <input type="radio" value="1" checked={state == 1} onChange={handleChange} />
          <span>Not Done</span>
        </label>
      </div>
  )
}

export default CardFilter
