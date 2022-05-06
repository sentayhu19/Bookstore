/* eslint-disable  no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { object } from 'prop-types';
import { generate } from 'randomized-string';
import { alphanumeric } from 'randomized-string/lib/types';
import Book from './Book';
import AddBooks from '../Addbooks/AddBooks';
import './Books.css';
import { getBookApi } from '../../redux/books/apiActions';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookApi());
  }, [dispatch]);
  const {
    bookStore, err, loadingAnim, error,
  } = useSelector((state) => state.booksReducer);
  if (loadingAnim === true) {
    return (<div><img src="https://i.pinimg.com/originals/f6/06/cb/f606cbf26c0a18898b96ef6857953a75.gif" className="loading" alt="loading" /></div>);
  }
  if (error === true) {
    return (<div className="error">Error While trying to fetch, Try refreshing the page</div>);
  }

  return (
    <>
      <main className="main">
        <section className="books-list-section">
          {Object.keys(bookStore).map((book) => (
            <Book
              key={generate({ charset: alphanumeric, length: 32 })}
              ID={book}
              book={bookStore[book][0]}
            />
          ))}

        </section>
        <section className="add-book-section">
          <AddBooks />
        </section>
      </main>
    </>
  );
};
export default Books;
