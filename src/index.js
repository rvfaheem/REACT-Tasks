import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Navbar } from './Navbar';
import Cards from './Cards';
import { Card1 } from './Card1';
import { Cards2 } from './Cards2';
import { Counter1 } from './Counter1';
import { Useeffect } from './Useeffect';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
{/* <Cards2/> */}
{/* <Counter1/> */}
  <Useeffect />


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
