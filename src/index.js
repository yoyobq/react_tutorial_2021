import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
// import Avatar from './Avatar';
// import Card from './Card';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Button message="Playing!">
        Play Movie
    </Button>
    <Button message="Uploading!">
        Upload Image
    </Button>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
