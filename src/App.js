import React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Book from './components/Book';
import Categories from './components/Categories';

function App() {
  return (
    <>
      <Header className="header" />
      <Navbar />
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
    </>
  );
}

export default App;
