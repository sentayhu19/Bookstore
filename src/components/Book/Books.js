import React from 'react';
import { createStore } from 'redux';
import { generate } from 'randomized-string';
import { alphanumeric } from 'randomized-string/lib/types';
import Book from './Book';
import AddBooks from '../Addbooks/AddBooks';
import './Books.css';
import reducer from '../../redux/configureStore';

const Books = () => {
  const store = createStore(reducer); // creating store from the root reducer
  return (
    <>
      <main className="main">
        <section className="books-list-section">

          <Book
            key={generate({ charset: alphanumeric, length: 32 })}
            {...store}
          />

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
