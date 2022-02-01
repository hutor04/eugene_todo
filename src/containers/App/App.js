import React, { useReducer, useEffect, useState } from 'react'
import reducer from '../../reducers/cards-reducer'
import AddCardForm from '../../components/AddCardForm/AddCardForm'
import CardFilter from '../../components/CardFilter/CardFilter'
import CardDeck from '../../components/CardDeck/CardDeck'
import './app.scss'

function App() {
  const [state, dispatch] = useReducer(reducer, [])
  const [filter, setFilter] = useState(2)

  const filteredState = state.filter(i => {
    const { status } = i
    if (filter === 2) {
      return true
    } else {
      return status === filter
    }
  })

  const addCard = data => {
    dispatch({ type: 'add', payload: data })
  }

  const addCards = data => {
    dispatch({ type: 'replace', payload: data })
  }

  const deleteCard = id => {
    dispatch({ type: 'delete', payload: id })
  }

  const editCard = data => {
    dispatch({ type: 'edit', payload: data })
  }

  const toggleStatus = id => {
    dispatch({ type: 'toggle', payload: id })
  }

  useEffect(() => {
    let storedCards = localStorage.getItem('cards')
    if (storedCards) {
      storedCards = JSON.parse(storedCards)
      addCards(storedCards)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(state))
  }, [state])

  return (
    <div className="main-container">
      <header className="page-header">
        <h1><i className="fas fa-tasks"></i> Eugene To-Do List</h1>
      </header>
      <main className="main-content">
        <AddCardForm action={addCard}/>
        <CardFilter
          state={filter}
          action={setFilter}
        />
        {
          state.length === 0
            ? null
            : <CardDeck cards={filteredState}
                        action={toggleStatus}
                        buttonActionEdit={editCard}
                        buttonActionRemove={deleteCard}/>
        }
      </main>
    </div>
  );
}

export default App;
