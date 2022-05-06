import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
import { removeBookApi } from '../../redux/books/apiActions';

const Book = ({ ID, book }) => {
  const dispatch = useDispatch();
  const {
    title, author, category,
  } = book;
  const removeHandler = () => {
    dispatch(removeBookApi(ID));
  };
  const percent = Math.floor(Math.random() * (67 - 58 + 1)) + 56;
  return (
    <>
      <div className="book-panel">
        <div>
          <div className="book-info">
            <p className="category">{category}</p>
            <h2 className="title-1">{title}</h2>
            <p className="author-1">{author}</p>
          </div>
          <div className="book-action-btns">
            <button
              type="button"
              className="action-btn"
            >
              Comments
            </button>
            |
            <button
              type="button"
              onClick={removeHandler}
              className="action-btn"
            >
              Remove
            </button>
            |
            <button
              type="button"
              className="action-btn"
            >
              Edit
            </button>
          </div>
        </div>
        <div className="progress">
          <div className="oval-comp-wrap">
            <div className="Rectangle-3">
              <div className="Oval-2" />
            </div>
            <div className="percent-complete-wrap">
              <div className="Lesson-Panel" />
              <span className="-Percent-Complete">
                {percent}
                %
              </span>
              <span className="Completed">
                Completed
              </span>
            </div>
          </div>
        </div>
        <div className="chapter-inf-wrap">
          <span className="Current-Chapter">
            CURRENT CHAPTER
          </span>
          <span className="Current-Lesson">
            Chapter3: A Lesson Learned
          </span>
          <div className="Rectangle-2">
            <span className="Update-progress">
              UPDATE PROGRESS
            </span>
          </div>
        </div>
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
