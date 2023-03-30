import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './pages/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Switch } from '@chakra-ui/react';
import Blog from './pages/Blog';
import { Science } from './pages/Science';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='blog' element={<Blog />} />
        <Route path='science' element={<Science />} />
      </Routes>
    </BrowserRouter>
    // <div className='App'>
    //   {/* <MainPage /> */}
    //   <Blog />
    // </div>
  );
}

export default App;
