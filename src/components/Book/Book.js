import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
import { removeBook, remove } from '../../redux/books/books';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    console.log('AM remove handler', id);
    dispatch(removeBook(remove(id)));
  };
  if (title !== undefined || author !== undefined) {
    return (
      <>
        <h2 className="title">{title}</h2>
        <p className="author">{author}</p>
        <button
          type="button"
          onClick={removeHandler}
          className="remove"
        >
          Remove
        </button>
      </>
    );
  }
  return <span />;
};
try {
  Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  };
} catch (err) {
  console.log('catched', err);
}

export default Book;
