import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Display from './components/Display';
import Main from './components/Main';
import Category from './components/Category';
import Product from './components/Product';
//-----
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Display />
        <Routes>
          <Route element={<Main />} path='/main' />
          <Route element={<Product />} path='/product' />
          <Route element={<Category />} path='/category' />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
