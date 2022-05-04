/* eslint-disable  no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import { generate } from 'randomized-string';
import { alphanumeric } from 'randomized-string/lib/types';
import Book from './Book';
import AddBooks from '../Addbooks/AddBooks';
import './Books.css';

const Books = () => {
  const Data = useSelector((state) => state.booksReducer);
  console.log('Data is : ', Data);
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

        </section>
        <section className="add-book-section">
          <AddBooks />
        </section>
      </main>
    </>
  );
};
export default Books;
