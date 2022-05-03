import React from 'react';
import './Categories.css';
import { useDispatch } from 'react-redux/es/exports';
import { checkStatus } from '../../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button className="Check-status" onClick={() => dispatch(checkStatus())} type="button">Check status</button>
    </>
  );
};
export default Categories;
