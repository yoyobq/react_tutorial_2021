import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App'; // 引用了来自 App.js 文件中的 React 组件，并将此组件命名为 App
import Hw from './Hw';
import './index.css';
import Photo from './MyFirstComponent';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* 显示Hw组件 */}
    <Hw />
    <Photo />
    <Photo />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
