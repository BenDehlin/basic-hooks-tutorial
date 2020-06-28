const initialState = {
  books: [],
  shoppingList: [],
}

const ADD_BOOK = "ADD_BOOK"
const ADD_SHOPPING_ITEM = "ADD_SHOPPING_ITEM"

export function addBook(payload) {
  return { type: ADD_BOOK, payload }
}

export function addShoppingItem(payload) {
  return { type: ADD_SHOPPING_ITEM, payload }
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case ADD_BOOK:
      return { ...state, books: [...state.books, payload] }
    case ADD_SHOPPING_ITEM:
      return { ...state, shoppingList: [...state.shoppingList, payload] }
    default:
      return state
  }
}
