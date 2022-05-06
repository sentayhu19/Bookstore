import React, { useState } from 'react';
import './AddBooks.css';
import { useDispatch } from 'react-redux';
import { generate } from 'randomized-string';
import { alphanumeric } from 'randomized-string/lib/types';
import { createNewBook } from '../../redux/books/books';
import { addBookApi } from '../../redux/books/apiActions';

const AddBooks = () => {
  const [book, setBook] = useState({
    title: '',
    category: '',
    id: 0,
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBookApi(createNewBook(book.title, book.author, book.id)));
    e.target.reset();
  };
  const handleChange = (e) => {
    const ID = generate({ charset: alphanumeric });
    e.persist();
    const { id } = e.target;
    const { value } = e.target;
    setBook((e) => ({
      ...e,
      id: ID,
      [id]: value,
    }));
  };
  return (
    <>
      <hr className="hline" />
      <div className="form-wrap">
        <h3 className="title-1">Add A New Book</h3>
        <form className="add-book-form" onSubmit={handleSubmit}>
          <input
            id="title"
            type="text"
            placeholder="Title"
            onChange={handleChange}
            value={book.value}
            required
            name="title"
            className="title"
          />
          <input
            id="author"
            type="text"
            placeholder="author"
            onChange={handleChange}
            value={book.value}
            required
            name="author"
            className="author"
          />
          <button
            className="Addbook-btn Rectangle-2"
            type="submit"
          >
            Add Book
          </button>
        </form>
      </div>
    </>
  );
};
export default AddBooks;
