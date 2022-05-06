import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
import { removeBookApi } from '../../redux/books/apiActions';

const Book = ({ ID, book }) => {
  const dispatch = useDispatch();
  const {
    title, author, categories,
  } = book;
  const removeHandler = () => {
    dispatch(removeBookApi(ID));
  };
  return (
    <>
      <div className="book">
        <h2 className="title">{title}</h2>
        <p className="author">{author}</p>
        <p className="categories">{categories}</p>
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
//   title: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired,
  ID: PropTypes.string.isRequired,
  book: PropTypes.string.isRequired,
};
export default Book;
