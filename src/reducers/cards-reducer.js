function reducer(cards, action) {
  switch(action.type) {
    case 'add':
      const newCard = {
        id: nextId(cards),
        title: action.payload.title,
        description: action.payload.description,
        status: 1,
      };
      return [...cards, newCard]

    case 'replace':
      return [...action.payload]

    case 'delete':
      return cards.filter(card => card.id !== action.payload)

    case 'edit':
      const editedCard = action.payload
      return [...cards.filter(card => card.id !== editedCard.id), editedCard]

    case 'toggle':
      return cards.map(card => {
        if (card.id !== action.payload) {
          return card
        }
        return {
          ...card,
          status: card.status === 0 ? 1 : 0,
        };
      })
    default:
      return cards
  }
}

function nextId(cards) {
  const max = cards.reduce((acc, val) => (val.id > acc ? val.id : acc), 0);
  return max + 1;
}

export default reducer;
