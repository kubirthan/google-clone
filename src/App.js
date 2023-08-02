import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import SearchPage from './pages/SearchPage';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/search' element={<SearchPage/>}/>
        <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>

      {/*home (the one with on search )*/}
      
      {/*results search page */}
    </div>
  );
}

export default App;
