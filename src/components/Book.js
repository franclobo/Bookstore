import React from 'react';
import PropTypes from 'prop-types';
import InputBook from './Form';

function Book(props) {
  const { title, author } = props;
  return (
    <div>
      <ul>
        <li>
          {title}
          {author}
        </li>
      </ul>
      <InputBook />
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

Book.defaultProps = {
  title: '',
  author: '',
};

export default Book;
