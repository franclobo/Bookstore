import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBooks } from '../redux/books/Books';

function InputBook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <form onSubmit={() => dispatch(addBooks())} className="form-book">
      <input
        type="text"
        className="input-title"
        placeholder="Add title..."
        required
        value={title}
        name="title"
        onChange={onChangeTitle}
      />
      <input
        type="text"
        className="input-author"
        placeholder="Add author..."
        required
        value={author}
        name="author"
        onChange={onChangeAuthor}
      />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default InputBook;
