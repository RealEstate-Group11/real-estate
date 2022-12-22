import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './component/Signin/Login';
import {
  BrowserRouter,
  Routes, Route
  
} from "react-router-dom";
import Signup from './component/Signin/Signup';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  <Route path="/Login" element={<Login/>}></Route>
  <Route path="/Signup" element={<Signup/>}></Route>
  </Routes>
  </BrowserRouter>
);