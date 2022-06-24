import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBooks } from '../redux/books/Books';

function InputBook() {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    id: uuidv4(),
    title: '',
    author: '',
  });

  const onChange = (e) => {
    const [name, value] = [e.target.name, e.target.value];
    if (value.trim() === '')e.target.value = '';
    setBook((previous) => ({
      ...previous,
      [name]: value.trim(),
    }));
  };

  return (
    <form onSubmit={() => dispatch(addBooks({ ...book }))} className="form-book">
      <input
        type="text"
        className="input-title"
        placeholder="Add title..."
        required
        name="title"
        onChange={onChange}
      />
      <input
        type="text"
        className="input-author"
        placeholder="Add author..."
        required
        name="author"
        onChange={onChange}
      />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default InputBook;
