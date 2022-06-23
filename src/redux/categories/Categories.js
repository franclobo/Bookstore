// Types
const CHECKING_STATUS = 'CHECKING_STATUS';

// Initial state
const initialState = {
  categoriess: [],
};

// Actions
export const addBooks = () => (dispatch, getState) => {
  getState();
  dispatch({
    type: CHECKING_STATUS,
    payload: 'Under construction',
  });
};

// Reducers
export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case CHECKING_STATUS:
      return { ...state, books: action.payload };
    default:
      return state;
  }
}
