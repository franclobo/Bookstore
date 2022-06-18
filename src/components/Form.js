import React, { useState } from 'react';
import PropTypes from 'prop-types';

function InputBook(props) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const { addBooksProps } = props;

  const onChange = (e) => {
    setTitle(e.target.value);
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addBooksProps(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Book title..."
        value={title}
        name="title"
        onChange={onChange}
      />
      <input
        type="text"
        className="input-text"
        placeholder="Author..."
        value={author}
        name="autor"
        onChange={onChange}
      />
      <button type="submit" className="input-submit">
        Add Book
      </button>
    </form>
  );
}

InputBook.propTypes = {
  addBooksProps: PropTypes.func,
};

InputBook.defaultProps = {
  addBooksProps: '',
};

export default InputBook;
