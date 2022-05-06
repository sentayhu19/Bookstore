import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Heading.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const heading = () => (
  <>
    <header className="heading">
      <div className="nav">
        <Link to="/">
          <h2 className="store">BookStore CMS</h2>
        </Link>
        <Link to="/Books" className="books">
          <p className="bookstxt">BOOKS</p>
        </Link>
        <Link to="/Categories" className="categories">
          <p className="categoriestxt">CATEGORIES</p>
        </Link>
      </div>
      <div className="user">
        <Link to="/">
          <FontAwesomeIcon className="user-icn" icon={faUser} title="User" />
        </Link>
      </div>

    </header>
  </>
);
export default heading;
