import { combineReducers, legacy_createStore as createStore } from 'redux';
import categoriesReducer from './categories/categories';
import booksReducer from './books/books';

const rootReducer = combineReducers({
  categoriesReducer,
  booksReducer,
});
// const middleware = applyMiddleware(thunk,logger)
const store = createStore(rootReducer); // creating store from the root reducer
export default store;
