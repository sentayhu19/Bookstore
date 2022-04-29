import React from 'react';
import { generate } from 'randomized-string';
import { alphanumeric } from 'randomized-string/lib/types';
import Book from './Book';
import AddBooks from '../Addbooks/AddBooks';
import './Books.css';

const Books = () => {
  const books1 = [];

  return (
    <>
      <main className="main">
        <section className="books-list-section">
          { books1.map((book) => (
            <Book
              key={generate({ charset: alphanumeric, length: 32 })}
              {...book}
            />
          ))}
          <button type="button" className="remove">Remove</button>
        </section>
        <section className="add-book-section">
          <AddBooks />
        </section>
      </main>
    </>
  );
};
export default Books;
