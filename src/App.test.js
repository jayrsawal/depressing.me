import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './home';
import Darkness from './darkness';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
