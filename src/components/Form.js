import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBooks } from '../redux/books/Books';

function InputBook() {
  const dispatch = useDispatch();

  const [newBook, setBook] = useState({
    item_id: '',
    title: '',
    author: '',
    category: '',
  });

  const onChange = (e) => {
    const [name, value] = [e.target.name, e.target.value];
    if (value.trim() === '') e.target.value = '';
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value.trim(),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBooks({ ...newBook, item_id: uuidv4() }));
    document.querySelector('.form-book').reset();
  };

  return (
    <form onSubmit={handleSubmit} className="form-book">
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
      <select name="category" className="inputs" required onChange={onChange}>
        <option value="" defaultValue>Category</option>
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Economy">Economy</option>
      </select>
      <button type="submit">Add Book</button>
    </form>
  );
}

export default InputBook;
