import React from 'react';
import './AddBooks.css';
// import { useDispatch } from 'react-redux';
// import { addBook } from '../../redux/books/books';

// const dispatch = useDispatch();
const AddBooks = () => (
  <>
    <hr className="hline" />
    <div className="form-wrap">
      <h3>Add A New Book</h3>
      <form className="add-book-form">
        <input type="text" placeholder="Title" className="title" />
        <input type="text" placeholder="author" className="Author" />
        {/* <button className="Addbook-btn"
        onClick={() => dispatch(addBook())} type="button">Add Book</button> */}
      </form>
    </div>
  </>
);
export default AddBooks;
