import axios from 'axios';
import { addBook, fetchError } from './books';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const appId = 'ux6EkcA2ZXp2cRIPwiAL';
const baseUrl = axios.create({ baseURL: `${url}/${appId}` });
export const getBookApi = () => (dispatch) => {
  baseUrl.get('/books').then((res) => {
    dispatch(addBook(res.data));
  }).catch(() => {
    dispatch(fetchError());
  });
};

export const removeBookApi = (ID) => (dispatch) => {
  baseUrl.delete(`/books/${ID}`, { item_id: ID }).then(() => {
    dispatch(getBookApi());
  }).catch(() => {
    dispatch(fetchError());
  });
};

export const addBookApi = (book) => (dispatch) => {
  axios({
    method: 'POST',
    url: `${url}/${appId}/books/`,
    data: {
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: 'Action',
    },
  }).catch(() => {
    dispatch(fetchError());
  });
  dispatch(getBookApi());
};
