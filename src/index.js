import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from './Avatar';
import Card from './Card';
import './index.css';
import Profile from './MyFirstComponent';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Profile />
    <Card>
      <Avatar
        size={200}
        person={{ 
          name: 'Hedy Lamarr', 
          imageId: 'yXOvdOSs'
        }}
      />
    </Card>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
