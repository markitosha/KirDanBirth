import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/video-react/dist/video-react.css';
import App from './components/App';

console.log('%cДаня, не ломай ничего пожалуйста. Закрой консоль и получай удовольствие.', 'color: white; background-color: red; font-size: 16px;');
ReactDOM.render(<App />, document.getElementById('root'));
