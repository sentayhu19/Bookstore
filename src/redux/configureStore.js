import {
  combineReducers, legacy_createStore as createStore, applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import categoriesReducer from './categories/categories';
import booksReducer from './books/books';

const rootReducer = combineReducers({
  categoriesReducer,
  booksReducer,
});
const store = createStore(rootReducer,
  applyMiddleware(thunk)); // creating store from the root reducer
export default store;
