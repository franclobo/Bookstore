import React from 'react';
import { useDispatch } from 'react-redux';
import { addBooks } from '../redux/books/Books';

function InputBook() {
  const dispatch = useDispatch();
  function getInitialBooks() {
    // getting stored items
    const temp = localStorage.getItem('books');
    const savedBooks = JSON.parse(temp);
    return savedBooks || [];
  }

  const [books, setBooks] = useState(getInitialBooks());

  const delBook = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };

  const addNewBook = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    setBooks([...books, newBook]);
  };
  useEffect(() => {
    // getting stored books
    const temp = localStorage.getItem('books');
    const loadedBooks = JSON.parse(temp);

    if (loadedBooks) {
      setBooks(loadedBooks);
    }
  }, [setBooks]);

  useEffect(() => {
    // storing books
    const temp = JSON.stringify(books);
    localStorage.setItem('books', temp);
  }, [books]);
  return (
    <form onSubmit={() => dispatch(addBooks())} className="form-book">
      <input
        type="text"
        className="input-title"
        placeholder="Add title..."
        name="title"
      />
      <input
        type="text"
        className="input-author"
        placeholder="Add author..."
        name="title"
      />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default InputBook;
