import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import InputBook from './Form';
import { loadBooks } from '../redux/books/Books';
import SingleBook from './SingleBook';

function Book() {
  const listBooks = useSelector((store) => store.books, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooks());
  }, []);
  return (
    <div>
      {listBooks.map((book) => (
        <SingleBook
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
      <InputBook />
    </div>
  );
}

export default Book;
