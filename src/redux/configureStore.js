import {
  legacy_createStore as createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';

import booksReducer from './books/Books';
import categoriesReducer from './categories/Categories';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
  return store;
}
