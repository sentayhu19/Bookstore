import { generate } from 'randomized-string';
import { alphanumeric } from 'randomized-string/lib/types';

const ADDBOOK = 'ADDBOOK';
const REMOVEBOOK = 'REMOVEBOOK';
const initState = [{
  id: generate({ charset: alphanumeric }),
  title: 'the book of boba fet',
  author: 'JJ',
},
{
  id: generate({ charset: alphanumeric }),
  title: 'the mandalorian',
  author: 'JJ',
},
];

export const createNewBook = (title, author, id) => {
  initState.push({
    title,
    author,
    id,
  });
};
let ID = 0;
export const remove = (id) => {
  ID = id;
  console.log('i got id', ID);
};
const booksReducer = (state = initState, action) => {
  console.log('ARRAY DATA: ', initState);
  switch (action.type) {
    case ADDBOOK:
      return [...state];

    case REMOVEBOOK:
      return [...state.filter((book) => book.id !== ID)];
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
