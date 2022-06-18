import React from 'react';
import PropTypes from 'prop-types';

function InputBook(props) {
  const { title, author } = props;
  return (
    <form className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Book title..."
        value={title}
        name="title"
      />
      <input
        type="text"
        className="input-text"
        placeholder="Author..."
        value={author}
        name="autor"
      />
      <button type="submit" className="input-submit">
        Add Book
      </button>
    </form>
  );
}

InputBook.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

InputBook.defaultProps = {
  title: '',
  author: '',
};

export default InputBook;
