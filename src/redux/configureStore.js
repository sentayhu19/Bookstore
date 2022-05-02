import { combineReducers } from 'redux';
import categoriesReducer from './categories/categories';
import booksReducer from './books/books';
 
export default combineReducers({
    categoriesReducer,
    booksReducer
});
