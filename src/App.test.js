import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  newFunction(div);
  ReactDOM.unmountComponentAtNode(div);
});
function newFunction(div) {
  ReactDOM.render(<App />, div);
}
