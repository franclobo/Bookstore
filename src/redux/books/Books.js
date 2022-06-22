const prevData = {
  books: []
}

const OBTAIN_BOOKS_SUCCESFUL = 'OBTAIN_BOOKS_SUCCESFUL'

// Reducers
export default function booksReducer(state = prevData, action) {
  switch (action.type) {
    case OBTAIN_BOOKS_SUCCESFUL:
      return { ...state, books: action.payload }
    default:
      return state
  }
}

// Actions
export const obtainBooks = () => async (dispatch, getState) => {
  try {
    const res = await axios.get('')
    dispatch({
      type: OBTAIN_BOOKS_SUCCESFUL,
      payload: res.data.results
    })
  } catch (error) {
    console.log(error)
  }
}