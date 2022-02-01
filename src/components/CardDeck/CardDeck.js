import React from 'react'
import Card from '../Card/Card'
import './carddeck.scss'

function CardDeck({ cards, action, buttonActionEdit, buttonActionRemove }) {
  const cardsToRender = (items, condition) => {
    const result = items
      .filter(item => item.status === condition)
      .sort((a, b) => a.status - b.status)
      .map(item => {
        const {
          id, status, title, description,
        } = item
        return (
          <Card
            key={id}
            id={id}
            status={status}
            title={title}
            description={description}
            action={action}
            buttonActionEdit={buttonActionEdit}
            buttonActionRemove={buttonActionRemove}
          />
        )
      })
    return result
  }
  return (
    <section className="items-list">
      {cardsToRender(cards, 1)}
      {cardsToRender(cards, 0)}
    </section>
  )
}

export default CardDeck
