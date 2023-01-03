import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Display from './components/Display';
import Main from './components/Main';
import Category from './components/Category';
import Product from './components/Product';
function App() {
  return (
    <div className="App">
      {/* <Product /> */}
      {/* <Category /> */}
      {/* <Main /> */}
      <BrowserRouter>
        <Display />
        <Routes>
          <Route element={<Product />} path='/product' />
          <Route element={<Category />} path='/category' />
          <Route element={<Main />} path='/main' />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
