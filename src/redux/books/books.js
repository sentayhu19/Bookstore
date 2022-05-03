const ADDBOOK = 'ADDBOOK';
const REMOVEBOOK = 'REMOVEBOOK';
const initState = [{
  id: 1,
  title: 'the book of boba fet',
  author: 'JJ',
},
{
  id: 1,
  title: 'the mandalorian',
  author: 'JJ',
},
];
const booksReducer = (state = initState, action) => {
  switch (action.type) {
    case ADDBOOK:
      return {
        ...state,
        books: [...state.id, ...state.title, ...state.author, action.type],
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
