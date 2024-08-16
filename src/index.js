import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './index.css';
import App from './App';
import About from './components/About';
import Cars from './components/Cars';
import Contact from "./components/Contact"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/cars" element={<Cars/>}/>
      <Route path="/contact" element={<Contact/>}/>

    </Routes>
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
