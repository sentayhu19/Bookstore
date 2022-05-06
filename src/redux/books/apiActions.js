import axios from 'axios';
import { addBook } from './books';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const appId = 'ux6EkcA2ZXp2cRIPwiAL';
const baseUrl = axios.create({ baseURL: `${url}/${appId}` });
export const getBookApi = () => (dispatch) => {
  baseUrl.get('/books').then((res) => {
    dispatch(addBook(res.data));
  }).catch(() => {
    console.log('am err catcher');
  });
};

export const removeBookApi = (ID) => (dispatch) => {
  console.log('am remove ap i got id : ', ID);
  baseUrl.delete(`/books/${ID}`, { item_id: ID }).then(() => {
    dispatch(getBookApi());
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
      category: 'abc',
    },
  }).catch((err) => {
    console.log('am err catcher', err);
  });
  dispatch(getBookApi());
};
