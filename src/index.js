import React from 'react';
import ReactDOM from 'react-dom';
import Hw from './Hw';
import './index.css';
import Photo from './MyFirstComponent';
import reportWebVitals from './reportWebVitals';
import TodoList from './TodoList';


ReactDOM.render(
  <React.StrictMode>
    {/* 显示Hw组件 */}
    <Hw />
    <Photo />
    <Photo />
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
