

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './img/Loogo.jpg';
import NavBar from './navbar/navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import './styles.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar img={Logo} />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
