/* eslint-disable  no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { generate } from 'randomized-string';
import { alphanumeric } from 'randomized-string/lib/types';
import Book from './Book';
import AddBooks from '../Addbooks/AddBooks';
import './Books.css';
import booksReducer, { removeBook } from '../../redux/books/books';
// import { removeBook } from '../../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.booksReducer);
  return (
    <>
      <main className="main">
        <section className="books-list-section">
          {Data.map((book) => (
            <Book
              key={generate({ charset: alphanumeric, length: 32 })}
              {...book}
            />
          ))}
          <button
            type="button"
            onClick={() => dispatch(removeBook())}
            className="remove"
          >
            Remove
          </button>

        </section>
        <section className="add-book-section">
          <AddBooks />
        </section>
      </main>
    </>
  );
};
export default Books;
