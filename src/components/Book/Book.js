import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <>
    <h2 className="title">{title}</h2>
    <p className="author">{author}</p>
  </>
);
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
const Book1 = () => (
  <>
    <Book title="abebe" author="abebe" />
    ;
  </>
);
export default Book1;
