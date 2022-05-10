/* eslint-disable  no-unused-vars */
import React from 'react';
import './Categories.css';
import { useDispatch, useSelector } from 'react-redux';
import categoriesReducer, { checkStatus } from '../../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const handleStatus = () => {
    dispatch(checkStatus());
  };
  const status = useSelector((state) => state.categoriesReducer);
  return (
    <>
      <button className="Check-status" onClick={handleStatus} type="button">Check status</button>
      <h2 className="message">{status}</h2>
    </>
  );
};
export default Categories;
