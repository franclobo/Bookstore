import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/Books';

function SingleBook() {
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
    </div>
  );
}

export default SingleBook;
