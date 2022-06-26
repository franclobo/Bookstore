import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/Books';

function SingleBook(props) {
  const {
    id, title, author, category,
  } = props;
  const dispatch = useDispatch();

  return (
    <div className="single-book">
      <ul className="book-data">
        <li className="book-category">{category}</li>
        <li className="book-title">{title}</li>
        <li className="book-author">{author}</li>
      </ul>
      <div className="button-book">
        <button type="button" className="commentBtn">Comments</button>
        <button className="removeBtn" type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
        <button type="button" className="editBtn">Edit</button>
      </div>
    </div>
  );
}

SingleBook.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
};

SingleBook.defaultProps = {
  id: '',
  title: '',
  author: '',
  category: '',
};

export default SingleBook;
