// Types
const CHECKING_STATUS = 'CHECKING_STATUS';

// Initial state
const initialState = [];

// Actions
export const checkStatus = () => (dispatch) => {
  dispatch({
    type: CHECKING_STATUS,
    payload: 'Under construction',
  });
};

// Reducers
export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case CHECKING_STATUS:
      return [...state, action.payload];
    default:
      return state;
  }
}
