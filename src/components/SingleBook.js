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
    <div>
      <ul>
        <li className="category">{category}</li>
        <li className="title">{title}</li>
        <li className="author">{author}</li>
      </ul>
      <button className="removeBtn" type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
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
