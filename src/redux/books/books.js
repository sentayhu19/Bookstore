import { generate } from 'randomized-string';
import { alphanumeric } from 'randomized-string/lib/types';

const ADDBOOK = 'ADDBOOK';
const REMOVEBOOK = 'REMOVEBOOK';
const initState = [{
  id: generate({ charset: alphanumeric }),
  title: 'The book of boba fet',
  author: 'Lucas',
  completed: false,
},
{
  id: generate({ charset: alphanumeric }),
  title: 'The mandalorian',
  author: 'JJ',
  completed: false,
},
];

export const createNewBook = (title, author, id) => {
  initState.push({
    title,
    author,
    id,
    completed: false,
  });
};
let ID = 0;
export const remove = (id) => {
  ID = id;
};
const booksReducer = (state = initState, action) => {
  switch (action.type) {
    case ADDBOOK:
      return [...initState];

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
