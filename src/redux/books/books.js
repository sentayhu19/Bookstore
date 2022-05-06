const ADDBOOK = 'ADDBOOK';
const REMOVEBOOK = 'REMOVEBOOK';
const FETCHBOOK = 'FETCHBOOK';
const initState = {
  bookStore: [],
  loadingAnim: true,
};
export const createNewBook = (title, author, id) => ({
  id,
  title,
  categories: 'action',
  author,
});
const booksReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCHBOOK:
      return [...state];
    case ADDBOOK:
      return {
        bookStore: action.payload,
        loadingAnim: false,
      };
    case REMOVEBOOK:
      return {
        book: state.book.filter((b) => b.item_id !== action.payload),
      };
    default:
      return state;
  }
};

export const addBook = (bookItems) => ({
  type: ADDBOOK,
  payload: bookItems,
});
export const removeBook = (bookItems) => ({
  type: REMOVEBOOK,
  payload: bookItems,
});
export const fetchBook = () => ({
  type: FETCHBOOK,
});

export default booksReducer;
