import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/practice-moviesdb" element={<Home />} />
          <Route path="/practice-moviesdb/detail/:id" element={<Detail />} />
          <Route path="/practice-moviesdb/user" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
