import { v4 as uuidv4 } from 'uuid';

// Types
const ADDING_BOOK_SUCCESFUL = 'ADDING_BOOK_SUCCESFUL';
const REMOVING_BOOK_SUCCESFUL = 'REMOVING_BOOK_SUCCESFUL';

// Initial state
const initialState = [
  {
    id: uuidv4(),
    title: 'The Lion, the Witch and the Wardrobe',
    author: 'C. S. Lewis',
  },
  {
    id: uuidv4(),
    title: 'Prince Caspian',
    author: 'C. S. Lewis',
  },
  {
    id: uuidv4(),
    title: 'The Voyage of the Dawn Treader',
    author: 'C. S. Lewis',
  },
];

// Actions
export const addBooks = () => (dispatch) => {
  const title = document.querySelector('.item-title');
  const author = document.querySelector('.item-author');
  const newBook = {
    id: uuidv4(),
    title: title.value,
    author: author.value,
  };
  dispatch({
    type: ADDING_BOOK_SUCCESFUL,
    payload: newBook,
  });
};
export const removeBook = (id) => (dispatch) => {
  dispatch({
    type: REMOVING_BOOK_SUCCESFUL,
    payload: id,
  });
};

// Reducers
export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case ADDING_BOOK_SUCCESFUL:
      return [...state, action.payload];
    case REMOVING_BOOK_SUCCESFUL:
      return [
        ...state.filter((book) => book.id !== action.payload),
      ];
    default:
      return state;
  }
}
