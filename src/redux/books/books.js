const ADDBOOK = 'bookstore/books/ADDBOOK';
const REMOVEBOOK = 'bookstore/books/REMOVEBOOK';

const booksReducer = (state = {}, action) => {
  switch (action.type) {
    case ADDBOOK:
      return {
        ...state,
        books: [...state.title, action.type],
      };
    case REMOVEBOOK:
      return {
        ...state,
        books: state.title.filter((books) => books.id !== action.type),
      };
    default:
      return state;
  }
};

export const addBook = () => ({
  type: ADDBOOK,
});
export const removeBook = () => ({
  type: REMOVEBOOK,
});
export default booksReducer;
