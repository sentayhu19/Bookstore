import React from 'react';
import './AddBooks.css';

const AddBooks = () => (
  <>
    <div className="form-wrap">
      <h3>Add A New Book</h3>
      <form className="add-book-form">
        <input type="text" placeholder="Title" className="title" />
        <input type="text" placeholder="author" className="Author" />
        <button className="Addbook-btn" type="button">Add Book</button>
      </form>
    </div>
  </>
);
export default AddBooks;
