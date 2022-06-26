import React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Book from './components/Book';
import Categories from './components/Categories';
import generateStore from './redux/configureStore';

function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <Header className="header" />
      <Routes>
        <Route
          path="/"
          element={<Book />}
        />
        <Route
          path="/categories"
          element={<Categories />}
        />
      </Routes>
    </Provider>
  );
}

export default App;
