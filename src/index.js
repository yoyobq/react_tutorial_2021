import React from 'react';
import ReactDOM from 'react-dom';
// import Avatar from './Avatar';
// import Card from './Card';
import './index.css';
import Item from './Item';
import PackingList from './PackingList';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <PackingList>
      <Item
        isPacked={true} 
        name="Space suit" 
      />
      <Item
        name="Helmet with a golden leaf" 
      />
      <Item
        isPacked={true} 
        name="Photo of Tam" 
      />
    </PackingList>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
