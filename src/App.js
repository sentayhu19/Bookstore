import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Categories from './components/Categories/Categories';
import Books from './components/Book/Books';
import Heading from './components/heading/Heading';

const App = () => (
  <Router>
    <Heading />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/Categories" element={<Categories />} />
    </Routes>
  </Router>
);

export default App;
