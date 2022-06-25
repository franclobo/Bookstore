import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/Books';
import InputBook from './Form';

function Book() {
  const dispatch = useDispatch();
  const listBooks = useSelector((store) => store.books);
  return (
    <div>
      <ul>
        {
          listBooks.map((item) => (
            <li key={item.id}>
              {item.title}
              <br />
              {item.author}
              <br />
              <button className="removeBtn" type="button" onClick={() => dispatch(removeBook())} key={item.id}>Remove</button>
            </li>
          ))
        }
      </ul>
      <InputBook />
    </div>
  );
}

export default Book;
