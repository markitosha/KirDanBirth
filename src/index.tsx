import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/video-react/dist/video-react.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

console.log('%cДаня, не ломай ничего пожалуйста. Закрой консоль и получай удовольствие.', 'color: white; background-color: red; font-size: 16px;');
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
