import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
import { removeBook, remove } from '../../redux/books/books';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(removeBook(remove(id)));
  };
  return (
    <>
      <div className="book">
        <h2 className="title">{title}</h2>
        <p className="author">{author}</p>
        <button
          type="button"
          onClick={removeHandler}
          className="remove"
        >
          Remove
        </button>
      </div>
    </>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Book;
