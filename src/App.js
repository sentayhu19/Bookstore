import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Fragment } from 'react';
import Categories from './components/Categories/Categories';
import Books from './components/Book/Books';
import Heading from './components/heading/Heading';
import store from './redux/configureStore';

const App = () => (
  <>
    <Provider store={store}>
      <Router>
        <Heading />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/Categories" element={<Categories />} />
        </Routes>
      </Router>
    </Provider>
  </>
);

export default App;
