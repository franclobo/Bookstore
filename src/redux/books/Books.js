// Types
const ADDING_BOOKS_SUCCESFUL = 'ADDING_BOOKS_SUCCESFUL';
const REMOVING_BOOKS_SUCCESFUL = 'REMOVING_BOOKS_SUCCESFUL';

// Initial state
const initialState = {
  books: [],
};

// Actions
export const addBooks = () => (dispatch, getState) => {
  getState();
  dispatch({
    type: ADDING_BOOKS_SUCCESFUL,
    payload: this.books.push(),
  });
};
export const removeBooks = (index) => (dispatch, getState) => {
  getState();
  dispatch({
    type: ADDING_BOOKS_SUCCESFUL,
    payload: this.books.splice(index, 1),
  });
};

// Reducers
export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADDING_BOOKS_SUCCESFUL:
      return { ...state, books: action.payload };
    case REMOVING_BOOKS_SUCCESFUL:
      return { ...state, books: action.payload };
    default:
      return state;
  }
}
